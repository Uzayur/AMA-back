import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { RecipeRoutes } from './routes/recipes';

const app = express();
app.use(json());

// Allow cross-origin requests
const corsOptions = {
    // Front url
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));

app.use('/api/recipes', RecipeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur starts on port ${port}`);
});
