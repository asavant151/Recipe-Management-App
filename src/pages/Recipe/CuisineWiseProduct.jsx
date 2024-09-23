import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CuisineWiseProduct = () => {
  const { cuisine } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes based on cuisine type
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recipes');
        const filteredRecipes = response.data.filter(
          (recipe) => recipe.cuisineType.toLowerCase() === cuisine.toLowerCase()
        );
        setRecipes(filteredRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [cuisine]);

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bolder display-6 mb-4">
        {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Recipes
      </h2>
      <div className="row home-recipe-card-grid">
        {recipes.length === 0 ? (
          <div className="no-recipes-found text-center">
            <p className="no-recipes-text font-normal">No recipes found for this cuisine.</p>
          </div>
        ) : (
          recipes.map((recipe) => (
            <div className="col-md-4 mb-3 recipe-card" key={recipe.id}>
              <div className="recipe-card-img-wrapper">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="card-info-wrapper flex-row">
                <div className="card-info primary-dark">
                  <Link
                    className="card-title two-line-truncate p2-text font-normal"
                    to={`/recipe/${recipe.id}`}
                  >
                    {recipe.title}
                  </Link>
                  <span className="card-source micro-text font-normal greyscale-2">
                    <Link
                      className="source-link truncate-single-line"
                      to={`/recipe/${recipe.id}`}
                    >
                      {recipe.cuisineType}
                    </Link>
                  </span>
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CuisineWiseProduct;
