import React from 'react'
import '../../App.css'
import '../homeComponents/RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className='recipe-card'>
        <img src={recipe.image_url} alt={recipe.type} />
        <h3>{recipe.recipe_name}</h3>
        <button onClick={handleClick}>See More</button>
    </div>
  )
}

export default RecipeCard