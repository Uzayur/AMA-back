import { Request, Response } from 'express';
import { recipes } from '../mockData';

export class RecipeController {
    static getAllRecipes(req: Request, res: Response): void {
        res.json(recipes);
    }

    static createRecipe(req: Request, res: Response): void {}

    static getRecipeById(req: Request, res: Response): void {}

    static updateRecipe(req: Request, res: Response): void {}

    static deleteRecipe(req: Request, res: Response): void {}
}
