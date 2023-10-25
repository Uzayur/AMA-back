import express from 'express';
import { json } from 'body-parser';
import { RecipeRoutes } from './routes/recipes';

const app = express();
app.use(json());

app.use('/api/recipes', RecipeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur starts on port ${port}`);
});
