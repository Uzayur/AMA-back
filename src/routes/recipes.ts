import { Router } from 'express';
import { RecipeController } from '../controllers/recipesController';

export const RecipeRoutes = Router();

RecipeRoutes.get('/', RecipeController.getAllRecipes);
RecipeRoutes.post('/', RecipeController.createRecipe);
RecipeRoutes.get('/:id', RecipeController.getRecipeById);
RecipeRoutes.put('/:id', RecipeController.updateRecipe);
RecipeRoutes.delete('/:id', RecipeController.deleteRecipe);
