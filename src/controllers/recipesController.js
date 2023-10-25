import { recipes } from '~/mockData';
var RecipeController = /** @class */ (function () {
    function RecipeController() {
    }
    RecipeController.getAllRecipes = function (req, res) {
        res.json(recipes);
    };
    RecipeController.createRecipe = function (req, res) { };
    RecipeController.getRecipeById = function (req, res) { };
    RecipeController.updateRecipe = function (req, res) { };
    RecipeController.deleteRecipe = function (req, res) { };
    return RecipeController;
}());
export { RecipeController };
