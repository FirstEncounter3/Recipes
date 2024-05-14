from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Category, Recipe

# Create your views here.


class CategoryList(APIView):
    def get(self, request):
        """
        Retrieves a list of all categories from the database and returns them as a JSON response.

        Parameters:
            request (HttpRequest): The HTTP request object.

        Returns:
            Response: A JSON response containing a list of dictionaries, each representing a category. Each dictionary contains the following keys:
                - id (int): The ID of the category.
                - name (str): The name of the category.
        """
        categories = [
            {
                "id": categories.id,
                "name": categories.name,
            }
            for categories in Category.objects.all()
        ]
        return Response(categories)


class CategoryDetail(APIView):
    def get(self, request, id: int):
        """
        Retrieves a category from the database based on the provided ID and returns it as a JSON response.

        Parameters:
            request (HttpRequest): The HTTP request object.
            id (int): The ID of the category to retrieve.

        Returns:
            Response: A JSON response containing the category data. If the category is found, the response will contain a dictionary with the following keys:
                - id (int): The ID of the category.
                - name (str): The name of the category.
            If the category is not found, the response will have a status code of 404.
        """
        try:
            category = Category.objects.get(id=id)
            category_data = {
                "id": category.id,
                "name": category.name,
            }
            return Response(category_data)
        except Category.DoesNotExist:
            return Response(status=404)


class RecipeList(APIView):
    def get(self, request):
        """
        Retrieves a list of all recipes from the database and returns them as a JSON response.

        Parameters:
            request (HttpRequest): The HTTP request object.

        Returns:
            Response: A JSON response containing a list of dictionaries, each representing a recipe. Each dictionary contains the following keys:
                - id (int): The ID of the recipe.
                - title (str): The title of the recipe.
                - description (str): The description of the recipe.
                - ingredients (str): The ingredients of the recipe.
                - instructions (str): The instructions for preparing the recipe.
                - photo (str): The URL of the recipe's photo.
                - category_name (str): The name of the category the recipe belongs to.
                - category_id (int): The ID of the category the recipe belongs to.
                - ingredients_beta (str): Additional ingredients for the recipe.
                - instructions_beta (str): Additional instructions for preparing the recipe.
        """
        recipes = [
            {
                "id": recipes.id,
                "title": recipes.title,
                "description": recipes.description,
                "ingredients": recipes.ingredients,
                "instructions": recipes.instructions,
                "photo": recipes.photo.url,
                "category_name": recipes.category.name,
                "category_id": recipes.category.id,
                "ingredients_beta": recipes.ingredients_beta,
                "instructions_beta": recipes.instructions_beta,
            }
            for recipes in Recipe.objects.all()
        ]
        return Response(recipes)


class RecipeDetail(APIView):
    def get(self, request, id: int):
        """
        Retrieves a recipe from the database based on the provided ID and returns it as a JSON response.

        Parameters:
            request (HttpRequest): The HTTP request object.
            id (int): The ID of the recipe to retrieve.

        Returns:
            Response: A JSON response containing the recipe data. If the recipe is found, the response will contain a dictionary with the following keys:
                - id (int): The ID of the recipe.
                - title (str): The title of the recipe.
                - description (str): The description of the recipe.
                - ingredients (str): The ingredients of the recipe.
                - instructions (str): The instructions for preparing the recipe.
                - photo (str): The URL of the recipe's photo.
                - category (str): The name of the category the recipe belongs to.
                - ingredients_beta (str): Additional ingredients for the recipe.
                - instructions_beta (str): Additional instructions for preparing the recipe.
            If the recipe is not found, the response will have a status code of 404.
        """
        try:
            recipe = Recipe.objects.get(id=id)
            recipe_data = {
                "id": recipe.id,
                "title": recipe.title,
                "description": recipe.description,
                "ingredients": recipe.ingredients,
                "instructions": recipe.instructions,
                "photo": recipe.photo.url,
                "category": recipe.category.name,
                "category_id": recipe.category.id,
                "ingredients_beta": recipe.ingredients_beta,
                "instructions_beta": recipe.instructions_beta,
            }
            return Response(recipe_data)
        except Recipe.DoesNotExist:
            return Response(status=404)


class RecipeByCategory(APIView):
    def get(self, request, category_id: int):
        """
        Retrieves a list of recipes from the database based on the provided category ID and returns them as a JSON response.

        Parameters:
            request (HttpRequest): The HTTP request object.
            category_id (int): The ID of the category to retrieve recipes from.

        Returns:
            Response: A JSON response containing a list of dictionaries, each representing a recipe. Each dictionary contains the following keys:
                - id (int): The ID of the recipe.
                - title (str): The title of the recipe.
                - description (str): The description of the recipe.
                - ingredients (str): The ingredients of the recipe.
                - instructions (str): The instructions for preparing the recipe.
                - photo (str): The URL of the recipe's photo.
                - category_name (str): The name of the category the recipe belongs to.
                - category_id (int): The ID of the category the recipe belongs to.
                - ingredients_beta (str): Additional ingredients for the recipe.
                - instructions_beta (str): Additional instructions for preparing the recipe.
        """
        recipes = [
                {
                    "id": recipes.id,
                    "title": recipes.title,
                    "description": recipes.description,
                    "ingredients": recipes.ingredients,
                    "instructions": recipes.instructions,
                    "photo": recipes.photo.url,
                    "category_name": recipes.category.name,
                    "category_id": recipes.category.id,
                    "ingredients_beta": recipes.ingredients_beta,
                    "instructions_beta": recipes.instructions_beta,
                } 
                for recipes in Recipe.objects.filter(category_id=category_id)
            ]
        return Response(recipes)
