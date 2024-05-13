import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

export const getCategories = () => {
    axios.get(`${baseUrl}/categories`).then((response) => {
        console.log(response.data);
        return response.data;
    });
};

export const getCategory = (id) => {
    return axios.get(`${baseUrl}/categories/${id}`);
};

export const getRecipes = () => {
    return axios.get(`${baseUrl}/recipes`);
};

export const getRecipe = (id) => {
    return axios.get(`${baseUrl}/recipes/${id}`);
};