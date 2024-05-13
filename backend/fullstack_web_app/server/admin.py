from django.contrib import admin

from .models import (
    Recipe,
    Category,
)

# Register your models here.


class RecipeAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "description",
        "ingredients",
        "instructions",
        "photo",
        "category",
        "ingredients_beta",
        "instructions_beta",
    ]
    fields = [
        "title",
        "description",
        "ingredients",
        "instructions",
        "photo",
        "category",
        "ingredients_beta",
        "instructions_beta",
    ]


admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Category)
