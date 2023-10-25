import express from 'express';
import { json } from 'body-parser';
import { RecipeRoutes } from '~/routes/recipes';
var app = express();
app.use(json());
app.use('/api/recipes', RecipeRoutes);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Serveur starts on port ".concat(port));
});
