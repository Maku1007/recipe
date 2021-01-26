import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  //   "publisher": "101 Cookbooks",
  //     "ingredients": [
  //       "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled",
  //       "1 3/4 (.44 ounce) teaspoons salt",
  //       "1 teaspoon (.11 ounce) instant yeast",
  //       "1/4 cup (2 ounces) olive oil (optional)",
  //       "1 3/4 cups (14 ounces) water, ice cold (40F)",
  //       "Semolina flour OR cornmeal for dusting"
  //     ],
  //     "source_url": "http://www.101cookbooks.com/archives/001199.html",
  //     "recipe_id": "47746",
  //     "image_url": "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
  //     "social_rank": 100,
  //     "publisher_url": "http://www.101cookbooks.com",
  //     "title": "Best Pizza Dough Ever"
  async getRecipe() {
    const result = await axios(
      "https://forkify-api.herokuapp.com/api/get?rId=" + this.id
    );

    this.publisher = result.data.recipe.publisher;
    this.ingredients = result.data.recipe.ingredients;
    this.source_url = result.data.recipe.source_url;
    this.recipe_id = result.data.recipe.recipe_id;
    this.image_url = result.data.recipe.image_url;
    this.publisher_url = result.data.recipe.publisher_url;
    this.title = result.data.recipe.title;
  }
}
