import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = ({ addRecipe, updateRecipe, recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const existingRecipe = recipes?.find((recipe) => recipe.id === id);
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (isEditing && existingRecipe) {
      setTitle(existingRecipe.title);
      setIngredients(existingRecipe.ingredients.join(', '));
      setInstructions(existingRecipe.instructions);
      setCuisineType(existingRecipe.cuisineType);
      setCookingTime(existingRecipe.cookingTime);
      setImage(existingRecipe.image);
    }
  }, [isEditing, existingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      id: isEditing ? existingRecipe.id : Date.now(),
      title,
      ingredients: ingredients.split(',').map((ing) => ing.trim()),
      instructions,
      cuisineType,
      cookingTime,
      image,
    };

    if (isEditing) {
      updateRecipe(recipeData);
    } else {
      addRecipe(recipeData);
    }

    navigate('/');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bolder display-6 mb-4">{isEditing ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="form-group mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Ingredients (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Cuisine Type</label>
          <input
            type="text"
            className="form-control"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Cooking Time (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Recipe Image</label>
          <input type="file" className="form-control" onChange={handleImageUpload} />
          {image && (
            <img src={image} alt="Recipe" className="img-thumbnail mt-2" style={{ maxHeight: '200px' }} />
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isEditing ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
