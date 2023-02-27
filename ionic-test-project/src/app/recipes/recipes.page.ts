import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
