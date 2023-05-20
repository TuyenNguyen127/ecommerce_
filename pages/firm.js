import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import { withSwal } from 'react-sweetalert2';

function Firms({swal}) {
    const [editedFirm, setEditedFirm] = useState(null);
    const [name,setName] = useState('');
    const [parentFirm,setParentFirm] = useState('');
    const [firms,setFirms] = useState([]);
    const [properties,setProperties] = useState([]);
    useEffect(() => {
        fetchFirms();
    }, [])
    function fetchFirms() {
        axios.get('/api/firm').then(result => {
        setFirms(result.data);
        });
    }
    async function saveFirm(ev){
        ev.preventDefault();
        const data = {
        name,
        parentFirm,
        properties:properties.map(p => ({
            name:p.name,
            values:p.values.split(','),
        })),
        };
        if (editedFirm) {
        data._id = editedFirm._id;
        await axios.put('/api/firm', data);
        setEditedFirm(null);
        } else {
        await axios.post('/api/firm', data);
        }
        setName('');
        setParentFirm('');
        setProperties([]);
        fetchFirms();
    }
    function editFirm(firm){
        setEditedFirm(firm);
        setName(firm.name);
        setParentFirm(firm.parent?._id);
        setProperties(
        firm.properties.map(({name,values}) => ({
        name,
        values:values.join(',')
        }))
        );
    }
    function deleteFirm(firm){
        swal.fire({
        title: 'Bạn có chắc không?',
        text: `Bạn có muốn xóa hãng ${firm.name}?`,
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Có',
        confirmButtonColor: '#d55',
        reverseButtons: true,
        }).then(async result => {
        if (result.isConfirmed) {
            const {_id} = firm;
            await axios.delete('/api/firm?_id='+_id);
            fetchFirms();
        }
        });
    }
    
    return (
        <Layout>
        <h1>Firms</h1>
        <label>
            {editedFirm
            ? `Sửa tên hãng ${editedFirm.name}`
            : 'Tạo hãng mới'}
        </label>
        <form onSubmit={saveFirm}>
            <div className="flex gap-1">
            <input
                type="text"
                placeholder={'Nhập tên hãng'}
                onChange={ev => setName(ev.target.value)}
                value={name}/>
            </div>
            <div className="flex gap-1">
            {editedFirm && (
                <button
                type="button"
                onClick={() => {
                    setEditedFirm(null);
                    setName('');
                }}
                className="btn-default">Hủy</button>
            )}
            <button type="submit"
                    className="btn-primary py-1">
                Lưu
            </button>
            </div>
        </form>
        {!editedFirm && (
            <table className="basic mt-4">
            <thead>
            <tr>
                <td>Tên hãng</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {firms.length > 0 && firms.map(firm => (
                <tr key={firm._id}>
                <td>{firm.name}</td>
                <td>{firm?.parent?.name}</td>
                <td>
                    <button
                    onClick={() => editFirm(firm)}
                    className="btn-default mr-1"
                    >
                    Sửa
                    </button>
                    <button
                    onClick={() => deleteFirm(firm)}
                    className="btn-red">Xóa</button>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
        )}
        </Layout>
    );
    }

export default withSwal(({swal}, ref) => (
    <Firms swal={swal} />
));
