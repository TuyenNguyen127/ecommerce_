import {Firm} from "@/models/Firm";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  //await isAdminRequest(req,res);

  if (method === 'GET') {
    res.json(await Firm.find());
  }
 
  if (method === 'POST') {
    const {name} = req.body;
    const firmDoc = await Firm.create({
      name
    });
    res.json(firmDoc);
  }

  if (method === 'PUT') {
    const {name,_id} = req.body;
    const firmDoc = await Firm.updateOne({_id},{
      name
    });
    res.json(firmDoc);
  }

  if (method === 'DELETE') {
    const {_id} = req.query;
    await Firm.deleteOne({_id});
    res.json('ok');
  }
}