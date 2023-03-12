import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Tonkotsu Ramen',
      imageUrl: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
      ingredients: ['Sesame Oil', 'Avocado Oil', 'Garlic', 'Fresh Ginger', 'Pork', 'Rice Vinegar', 'Soft-boiled Egg']
    },
    {
      id: 'r1',
      title: 'Chicken Ramen',
      imageUrl: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
      ingredients: ['Sesame Oil', 'Avocado Oil', 'Garlic', 'Fresh Ginger', 'Chicken', 'Rice Vinegar', 'Soft-boiled Egg']
    }
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string | null) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
