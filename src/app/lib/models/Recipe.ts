import mongoose, { Model, Schema } from "mongoose";
import IRecipes from "@/app/types/models/RecipeType";

const RecipeSchema: Schema<IRecipes> = new Schema<IRecipes>({
  id: { type: Number, required: true, unique: true },
  category_id: { type: Number, required: true, unique: true },
  img:{ type: String, required: true, unique: true },
  recipe_name:{ type: String, required: true, unique: true },
  ingredients: { type: [String], required: true },
  description:{ type: String, required: true, unique: true },

});

const Recipe: Model<IRecipes> =
  mongoose.models.Category ||
  mongoose.model<IRecipes>("Recipe", RecipeSchema);

export default Recipe;
