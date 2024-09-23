import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./pages/Recipe/RecipeList";
import RecipeDetail from "./pages/Recipe/RecipeDetail";
import RecipeForm from "./pages/Recipe/RecipeForm";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import CuisineWiseProduct from "./pages/Recipe/CuisineWiseProduct";
import Footer from "./components/Footer/Footer";

const API_URL = "http://localhost:5000/recipes";

function App() {
  const [recipes, setRecipes] = useState([]);

  // Fetch all recipes from JSON server
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_URL);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Add a new recipe to JSON server
  const addRecipe = async (newRecipe) => {
    try {
      const response = await axios.post(API_URL, newRecipe);
      setRecipes([...recipes, response.data]);
    } catch (error) {
      console.error("Error adding recipe", error);
    }
  };

  // Update an existing recipe in JSON server
  const updateRecipe = async (updatedRecipe) => {
    try {
      await axios.put(`${API_URL}/${updatedRecipe.id}`, updatedRecipe);
      setRecipes(
        recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      );
    } catch (error) {
      console.error("Error updating recipe", error);
    }
  };

  // Delete a recipe from JSON server
  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error("Error deleting recipe", error);
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
              }
            />
            <Route path="/new" element={<RecipeForm addRecipe={addRecipe} />} />
            <Route
              path="/edit/:id"
              element={
                <RecipeForm recipes={recipes} updateRecipe={updateRecipe} />
              }
            />
            <Route
              path="/recipe/:id"
              element={<RecipeDetail recipes={recipes} />}
            />
            <Route path="/cuisine/:cuisine" element={<CuisineWiseProduct />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
