import { Router } from 'express';
import { RecipeController } from '~/controllers/recipesController';
export var RecipeRoutes = Router();
RecipeRoutes.get('/recipes', RecipeController.getAllRecipes);
RecipeRoutes.post('/recipes', RecipeController.createRecipe);
RecipeRoutes.get('/recipes/:id', RecipeController.getRecipeById);
RecipeRoutes.put('/recipes/:id', RecipeController.updateRecipe);
RecipeRoutes.delete('/recipes/:id', RecipeController.deleteRecipe);
