from django.urls import path
from main.views import home
  # Correctly import views from the current app

urlpatterns = [
    path('', home, name='home'),  # Define the URL pattern for the home view
]
