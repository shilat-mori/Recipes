import { Document } from "mongoose";
export default interface Recipe extends Document {
  id: number;
  category_id: number;
  img: string;
  recipe_name: string;
  ingredients: Array<string>;
  favorite:boolean,
  description: string;
}
