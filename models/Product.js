import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
  code: {
    type: String
  },
  firm:{type:mongoose.Types.ObjectId, ref:'Firm'},
  status: {
    type: Boolean,
    default: true
  },
  origin: {
    type: String
  },
  guarantee: {
    type: Number
  },
  wattage: {
    type: String
  },
  feature: {
    type: String
  }
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);