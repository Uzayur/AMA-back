import { Request, Response } from 'express';
import { recipes } from '../mockData';
import { Recipe } from "../models/recipe";

export class RecipeController {
    static mockRecipes: Recipe[] = recipes;

    static getAllRecipes(req: Request, res: Response): void {
        // No error case because the data is mocked
        res.status(200).json(RecipeController.mockRecipes);
    }

    static createRecipe(req: Request, res: Response): void {
        const newRecipeData: Recipe = req.body;

        if (!newRecipeData) {
            // Return 400 response if body is incorrect
            res.status(400).json({ message: "Invalid recipe data" });
            return;
        }

        RecipeController.mockRecipes.push(newRecipeData);
        // Return 201 response if the recipe has been created
        res.status(201).json(newRecipeData);
    }

    static getRecipeById(req: Request, res: Response): void {
        const recipeId = parseInt(req.params.id);

        if (isNaN(recipeId) || recipeId < 1) {
            // Return 400 response if ID is incorrect
            res.status(400).json({ message: "Invalid recipe ID" });
            return;
        }

        const recipe = RecipeController.mockRecipes.find((recipe) => recipe.id === recipeId);

        if (recipe) {
            // Return 200 response if the recipe is found
            res.status(200).json(recipe);
        } else {
            // Return 404 response if the recipe is not found
            res.status(404).json({ message: "Recipe not found" });
        }
    }

    static updateRecipe(req: Request, res: Response): void {
        const updatedRecipeData: Recipe = req.body;
        const recipeId = parseInt(req.params.id);

        if (!updatedRecipeData || isNaN(recipeId) || recipeId < 1) {
            // Return 400 response if body or ID is incorrect
            res.status(400).json({ message: "Invalid recipe data or ID" });
            return;
        }

        const recipe = RecipeController.mockRecipes.find((recipe) => recipe.id === recipeId);

        if (recipe) {
            recipe.name = updatedRecipeData.name;
            recipe.description = updatedRecipeData.description;
            recipe.ingredients = updatedRecipeData.ingredients;
            recipe.instructions = updatedRecipeData.instructions;
            recipe.updatedAt = updatedRecipeData.updatedAt;

            // Return 200 response if recipe has been updated
            res.status(200).json(recipe);
        } else {
            // Return 404 response if recipe has not been found
            res.status(404).json({ message: "Recipe not found" }); // Return a 404 response if the recipe is not found
        }
    }

    static deleteRecipe(req: Request, res: Response): void {
        const recipeId = parseInt(req.params.id);

        if (isNaN(recipeId) || recipeId < 1) {
            // Return 400 response if ID is incorrect
            res.status(400).json({ message: "Invalid recipe ID" });
            return;
        }

        const index = RecipeController.mockRecipes.findIndex((recipe) => recipe.id === recipeId);

        if (index !== -1) {
            RecipeController.mockRecipes.splice(index, 1);

            // Return 204 request if recipe has been deleted
            res.status(204).json();
        } else {
            // Return 404 response if recipe has not been found
            res.status(404).json({ message: "Recipe not found" });
        }
    }
}
