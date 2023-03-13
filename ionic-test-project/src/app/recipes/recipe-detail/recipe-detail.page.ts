import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe!: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');

      if (recipeId)
        this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertController.create(
      {
        header: 'Confirmation',
        message: 'Remove Recipe?',
        buttons: [
          {
          text: 'Cancel',
          role: 'cancel'
          },
          {
            text: 'Remove',
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id!);
              this.router.navigate(['/recipes']);
            }
          }
      ]}).then(alertElement => {
        alertElement.present();
      });
  }

}
