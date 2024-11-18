import mongoose, { Model, Schema } from "mongoose";
import ICategory from "@/app/types/models/CategoryType";

const CategorySchema: Schema<ICategory> = new Schema<ICategory>({
  id: { type: Number, required: true, unique: true },
  category_name: { type: String, required: true, unique: true },
});

const Category: Model<ICategory> =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
