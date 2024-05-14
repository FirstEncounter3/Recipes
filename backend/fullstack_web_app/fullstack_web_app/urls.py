"""
URL configuration for fullstack_web_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from server.views import CategoryList, RecipeList, CategoryDetail, RecipeDetail, RecipeByCategory

schema_view = get_schema_view(
    openapi.Info(
        title="Backend API recipes",
        default_version="v1",
        description="API for Fullstack Web App ",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="user@example.org"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/categories/", CategoryList.as_view(), name="categories"),
    path("api/category/<int:id>/", CategoryDetail.as_view(), name="category"),
    path("api/recipes/", RecipeList.as_view(), name="recipes"),
    path("api/recipe_by_id/<int:id>/", RecipeDetail.as_view(), name="recipe"),
    path("api/recipes_by_category_id/<int:category_id>/", RecipeByCategory.as_view(), name="recipe_by_category"),

    path(
        "api/swagger(?P<format>\.json|\.yaml)",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "api/redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"
    ),
]
