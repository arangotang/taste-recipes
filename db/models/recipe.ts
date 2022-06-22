import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema({
  prep: Number,
  cook: Number,
  chill: Number,
  servings: Number,
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cuisine: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  times: { type: timeSchema, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  id: { type: String, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
