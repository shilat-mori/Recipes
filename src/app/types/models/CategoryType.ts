import { Document } from "mongoose";
export default interface ICategory extends Document {
  id: number;
  category_name: string;
}
