export default interface IRecipe {
  id: number;
  category_id: number;
  img:string,
  recipe_name:string,
  ingredients:Array<string>,
  description:string
}
