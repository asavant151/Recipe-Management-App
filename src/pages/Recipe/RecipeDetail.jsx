import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./RecipeDetail.css";

const RecipeDetail = ({ recipes, deleteRecipe }) => {
  const { id } = useParams();
  console.log(id);
  
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id ? parseInt(id) : "");

  if (!recipe) return <p>Recipe not found.</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/");
  };

  return (
    <div className="recipe">
      <div className="recipe-summary wrapper row">
        <div className="recipe-details col-md-6 col-12 order-lg-1 order-2 mt-md-0 mt-4">
          <div className="primary-info-text">
            <div className="primary-info-left-wrapper">
              <h1 className="recipe-title font-bold h2-text primary-dark">
                {recipe.title}
              </h1>
              <span className="attribution">
                <a
                  className="source-link font-bold micro-text greyscale-3"
                  title="GOOD DINNER MOM"
                  aria-label="GOOD DINNER MOM"
                  href="/page/gooddinnermom"
                >
                  GOOD DINNER MOM
                </a>
              </span>
            </div>
          </div>
          <div className="review-snippet media">
            <div className="review-content font-normal p2-text">
              <a
                className="reviewer-name font-bold"
                title="Paulina Jones"
                aria-label="Paulina Jones"
                href="/profile/PaulinaJones9"
              >
                Paulina Jones
              </a>
              : {recipe.instructions}
              <a
                className="review-link font-bold p3-text primary-teal"
                href="#494b16c8-f28c-4668-a5cf-81e7444a1ef2"
                title="Read More"
                aria-label="Read More"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="summary-item-wrapper">
            <div className="recipe-summary-item  h2-text">
              <span className="value font-light h2-text">
                {recipe.ingredients.length}
              </span>
              <span className="unit font-normal p3-text">Ingredients</span>
            </div>
            <div className="recipe-summary-item unit h2-text">
              <span className="value font-light h2-text">
                {recipe.cookingTime}
              </span>
              <span className="unit font-normal p3-text">Minutes</span>
            </div>
            <div className="recipe-summary-item nutrition h2-text">
              <span className="value font-light h2-text">
                {recipe.cuisineType}
              </span>
              <span className="unit font-normal p3-text">Cuisine Type</span>
            </div>
          </div>
        </div>
        <div className="recipe-details-image col-md-6 col-12 order-lg-2 order-1">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>
      <div className="recipe-horizontal-rule greyscale-4">
        <hr />
      </div>
      <div className="recipe-ingredients">
        <h3 className="ingrs-header-title title h4-text primary-dark">
          Ingredients
        </h3>
        <div className="shopping-list-ingredients mt-4">
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="IngredientLine">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-3">
        <Link to={`/edit/${recipe.id}`} className="btn btn-primary me-3 mt-4">
          Edit
        </Link>
        <button className="btn btn-danger mt-4" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
