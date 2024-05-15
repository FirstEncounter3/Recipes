from django.db import models

# Create your models here.


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.JSONField(default=list)
    instructions = models.JSONField(default=dict)
    photo_url = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    category = models.ForeignKey("Category", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} | {self.category}"


class Category(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"
