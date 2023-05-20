import {model, models, Schema} from "mongoose";

const FirmSchema = new Schema({
  name: {type:String,required:true},
});

export const Firm = models?.Firm || model('Firm', FirmSchema);