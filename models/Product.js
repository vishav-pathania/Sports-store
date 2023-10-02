import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:String, ref:'Category'},
  properties: {type:Object},
}, {
  timestamps: true,
});
const product = mongoose.models && mongoose.models?.Product
export const Product = product || mongoose.model('Product', ProductSchema);
