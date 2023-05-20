import multiparty from 'multiparty';
import cloudinary from 'cloudinary';
import { mongooseConnect } from '@/lib/mongoose';
import { isAdminRequest } from '@/pages/api/auth/[...nextauth]';

cloudinary.config({ 
  cloud_name: 'dx67cp5hj', 
  api_key: '638935872998726', 
  api_secret: 'noHMvmPyRxUVXfbXRYyH9rpFeic' 
});

export default async function handle(req, res) {
  await mongooseConnect();
  //await isAdminRequest(req, res);

  const form = new multiparty.Form();

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const links = [];
  for (const file of files.file) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(
        file.path,
        { type: "private", width: 600 }, // Thay đổi giá trị width tùy theo nhu cầu của bạn
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });

    const link = result.secure_url;
    links.push(link);
  }

  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};
