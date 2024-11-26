import mongoose, { Model, Schema } from "mongoose";
import IRecipes from "@/app/types/models/RecipeType";

const RecipeSchema: Schema<IRecipes> = new Schema<IRecipes>({
  id: { type: Number, required: true, unique: true },
  category_id: { type: Number, required: true },
  img: { type: String, required: true },
  recipe_name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  favorite: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const Recipe: Model<IRecipes> =
  mongoose.models.Reccipe || mongoose.model<IRecipes>("Recipe", RecipeSchema);

export default Recipe;
