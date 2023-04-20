import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import { BiSearch } from 'react-icons/bi'
import RecipeCard from './RecipeCard'
import './HomeScreen.css'

const HomeScreen = () => {  

  const [ recipes, setRecipes ] = useState([])
  const [search, setSearch] = useState('')

const getRecipes = () => {
  axios.get(`https://recipes.devmountain.com/recipes`)
  .then((res) => {
    console.log(res.data);
    setRecipes(res.data)
  })
}

useEffect(() => {
  getRecipes()
}, [])

const recipeDisplay = recipes.filter(
  (recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
  }).map(
    (recipe, index) => {
      return <RecipeCard recipe={recipe}/>
  })

  return (
    <div className='home'>
      <AdBanner />
     
      <div className="search">
        <BiSearch />
        <input
          type="text"
          placeholder='Search for a Recipe'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {search !== '' ? recipeDisplay : null}
      </div>
    </div>
   
  )
}

export default HomeScreen