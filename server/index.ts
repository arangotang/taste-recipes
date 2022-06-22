require('dotenv').config();
const db = require('../db');
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import {
  addRecipe,
  getAllRecipes,
  getOneRecipe,
} from '../db/controllers/recipe';

const PORT = process.env.PORT || 3001;

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/recipes', async (req, res) => {
  const getRes = await getAllRecipes();
  if (!getRes) {
    res.sendStatus(404);
  } else {
    res.send(getRes).status(200);
  }
});

app.post('/recipes', async (req, res) => {
  const postRes = await addRecipe(req.body);
  if (!postRes) {
    res.sendStatus(400);
  } else {
    res.sendStatus(201);
  }
});

app.get('/recipes/:recipeId', async (req, res) => {
  const postRes = await getOneRecipe(req.params.recipeId);
  if (postRes === false) {
    res.sendStatus(400);
  } else {
    res.send(postRes).status(200);
  }
});

export const server = app.listen(PORT, (): void => {
  console.log(`Listening on port ${PORT}`);
});
