import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes, deleteRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { name: "American", img: "./assets/images/american.webp" },
    { name: "Italian", img: "./assets/images/italian.webp" },
    { name: "Asian", img: "./assets/images/asian.webp" },
    { name: "Mexican", img: "./assets/images/mexican.webp" },
    { name: "French", img: "./assets/images/french.webp" },
  ];

  const handleCuisineClick = (cuisine) => {
    navigate(`/cuisine/${cuisine}`);
  };

  return (
    <div className="home-page">
      <img
        alt="Home Background"
        src="https://x.yummlystatic.com/web/banner-marble-bkg.jpg"
        className="default-bkg"
        srcSet="https://x.yummlystatic.com/web/banner-marble-bkg@2x.jpg 2x"
        data-pin-nopin="true"
      ></img>
      <button
        title="Search for Recipes"
        aria-label="Search for Recipes"
        className="button search-opener"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
        <span className="icon spyglass y-icon" data-icon="">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="placeholder-text font-normal p1-text border-0"
          placeholder="Search 2M+ Recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </button>
      <img
        alt="Onboarding"
        src="https://x.yummlystatic.com/web/strawberry-grain.png"
        className="onboarding-image strawberry-grain"
        data-pin-nopin="true"
      ></img>
      <img
        alt="Onboarding"
        src="https://x.yummlystatic.com/web/img-fruit-bowl.png"
        className="onboarding-image fruit-bowl"
        data-pin-nopin="true"
      ></img>
      <img
        alt="Onboarding"
        src="https://x.yummlystatic.com/web/img-strawberry.png"
        className="onboarding-image strawberry"
        data-pin-nopin="true"
      ></img>
      <div className="onboarding-widget">
        <div className="widget-header">
          <h3 className="sub-title micro-text font-normal">
            Personalize Your Experience
          </h3>
          <h2 className="title h3-text">What are your favorite cuisines?</h2>
        </div>
        <div className="d-flex justify-content-start mb-4">
          {/* Horizontal scrollable categories */}
          <div className="scrolling-wrapper row onboarding-bubble">
            {categories.map((category) => (
              <div
                className="col-lg-3 col-md-6 col-12 account-bubble type-image bubble-cuisines"
                key={category.name}
                onClick={() => handleCuisineClick(category.name)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="img-fluid"
                />
                <span className="text micro-caps font-bold bubble-text">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="home-title primary-dark h4-text font-bold">
        Just for you
      </h1>
      <div className="row home-recipe-card-grid align-items-center">
        {filteredRecipes.length === 0 ? (
          <div className="no-recipes-found text-center">
            <img
              src="./assets/images/not-found.png"
              alt="No Recipes Found"
              className="not-found-image"
            />
            <p className="no-recipes-text font-normal">
              No recipes found. Please try a different search.
            </p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div className="col-md-4 mb-3 recipe-card" key={recipe.id}>
              <div className="recipe-card-img-wrapper">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="card-info-wrapper">
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
                  <Link
                    to={`/edit/${recipe.id}`}
                    className="btn btn-warning mx-2 btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteRecipe(recipe.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
