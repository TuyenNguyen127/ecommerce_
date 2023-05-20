import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import {ReactSortable} from "react-sortablejs";
import Image from "next/image";

export default function ProductForm({
  _id,
  title:existingTitle,
  description:existingDescription,
  price:existingPrice,
  images:existingImages,
  category:assignedCategory,
  properties:assignedProperties,
  code: existingCode,
  firm: assignedFirm,
  status: assignedStatus,
  origin: existingOrigin,
  guarantee: existingGuarantee,
  wattage: existingWattage,
  feature: existingFeature
}) {
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [category, setCategory] = useState(assignedCategory || '');
  const [productProperties, setProductProperties] = useState(assignedProperties || {});
  const [price, setPrice] = useState(existingPrice || '');
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [firm, setFirm] = useState(assignedFirm || '');
  const [firms, setFirms] = useState([]);
  const [code, setCode] = useState(existingCode || '');
  const [status, setStatus] = useState(assignedStatus || true);
  const [origin, setOrigin] = useState(existingOrigin || '');
  const [guarantee, setGuarantee] = useState(existingGuarantee || 0);
  const [wattage, setWattage] = useState(existingWattage || '');
  const [feature, setFeature] = useState(existingFeature || '');
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    })
    axios.get('/api/firm').then(result => {
      setFirms(result.data);
    });
  }, []);

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title, description, price, images, category, firm, code, status, origin, guarantee, wattage, feature,
      properties :productProperties
    };
    if (_id) {
      //update
      await axios.put('/api/products', {...data,_id});
    } else {
      //create
      await axios.post('/api/products', data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push('/products');
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }
      const res = await axios.post('/api/upload', data);
      setImages(oldImages => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  function setProductProp(propName,value) {
    setProductProperties(prev => {
      const newProductProps = {...prev};
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({_id}) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while(catInfo?.parent?._id) {
      const parentCat = categories.find(({_id}) => _id === catInfo?.parent?._id);
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
      <form onSubmit={saveProduct}>
        
        <label>Tên sản phẩm</label>
        <input
          type="text"
          placeholder="tên sản phẩm"
          value={title}
          onChange={ev => setTitle(ev.target.value)}/>

        <label>Danh mục sản phẩm</label>
        <select value={category}
                onChange={ev => setCategory(ev.target.value)}>
          <option value="">Không có</option>
          {categories.length > 0 && categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        {propertiesToFill.length > 0 && propertiesToFill.map(p => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
            <div>
              <select value={productProperties[p.name]}
                      onChange={ev =>
                        setProductProp(p.name,ev.target.value)
                      }
              >
                {p.values.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <label>Hãng</label>
        <select value={firm}
                onChange={ev => setFirm(ev.target.value)}>
          <option value="">Không có</option>
          {firms.length > 0 && firms.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <label>Trạng thái</label>
        <select value={status}
                onChange={ev => setStatus(ev.target.value)}>
          <option value={true} onClick={() => setStatus(true)}>Còn hàng</option>
          <option value={false} onClick={() => setStatus(false)}>Hết hàng</option>
        </select>

        <label>
          Hình ảnh
        </label>
        <div className="mb-2 flex flex-wrap gap-1">
          <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}>
            {!!images?.length && images.map(link => (
              <div key={link} className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200">
                <img src={link} alt="" className="rounded-lg"/>
              </div>
            ))}
          </ReactSortable>
          {isUploading && (
            <div className="h-24 w-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              Thêm ảnh
            </div>
            <input type="file" onChange={uploadImages} className="hidden"/>
          </label>
        </div>

        <label>Mô tả sản phẩm</label>
        <textarea
          placeholder="Mô tả sản phẩm"
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />

        <label>Chức năng chính</label>
        <textarea
          placeholder="Chức năng chính của sản phẩm"
          value={feature}
          onChange={ev => setFeature(ev.target.value)}
        />

        <label>Mã sản phẩm</label>
        <input
          type="text"
          placeholder="Nhập mã sản phẩm"
          value={code}
          onChange={ev => setCode(ev.target.value)}/>

        <label>Công suất</label>
        <input
          type="text"
          placeholder="Nhập rõ đơn vị"
          value={wattage}
          onChange={ev => setWattage(ev.target.value)}/>

        <label>Xuất xứ</label>
        <input
          type="text"
          placeholder="Nhập rõ đơn vị"
          value={origin}
          onChange={ev => setOrigin(ev.target.value)}/>
          
        <label>Giá sản phẩm (vnd)</label>
        <input
          type="number" placeholder="Nhập giá sản phẩm"
          value={price}
          onChange={ev => setPrice(ev.target.value)}
        />

        <label>Thời gian bảo hành (tháng)</label>
        <input
          type="number" placeholder="Số tháng có thể bảo hành từ lúc mua"
          value={guarantee}
          onChange={ev => setGuarantee(ev.target.value)}
        />

        <button
          type="submit"
          className="btn-primary">
          Save
        </button>
      </form>
  );
}
