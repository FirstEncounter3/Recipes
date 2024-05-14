import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const getCategories = () => {
  return axios.get(`${baseUrl}/categories`);
};

const getCategory = (id) => {
  return axios.get(`${baseUrl}/category/${id}`);
};

const getRecipes = () => {
  return axios.get(`${baseUrl}/recipes`);
};

const getRecipe = (id) => {
  return axios.get(`${baseUrl}/recipe_by_id/${id}`);
};

const getRecipeByCategoryId = (id) => {
  return axios.get(`${baseUrl}/recipes_by_category_id/${id}`);
};

export default {
  getCategories,
  getCategory,
  getRecipes,
  getRecipe,
  getRecipeByCategoryId,
};
