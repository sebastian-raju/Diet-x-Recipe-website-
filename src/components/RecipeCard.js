import React from 'react'
import './styles/RecipeCard.css'
import { Link } from 'react-router-dom';

function RecipeCard({recipeObj}) {
  const {id, mealType, image, name, prepTimeMinutes, rating, servings, tags, difficulty, reviewCount} = recipeObj;
  return (
    <>
      <Link to={'/single-recipe/'+ id} style={{textDecoration: "none"}}>
        <div className="recipe-card">
            <div className='main-card-content'>
              <div className="recipe-img-container">
                <img className='recipe-image' src={image} alt="" />
                <div className="meal-type">{mealType.join(', ')}</div>
              </div>
              <div className="recipe-card-content">
                <div className="recipe-title">
                  {name}
                </div>
                <div className="recipe-subtitle">
                {tags.join(', ')}
                </div>
                <div className="recipe-rating d-flex align-items-center column-gap-1">
                  {rating} <i className="fa-solid fa-star"></i> <div className='text-black review-count'>({reviewCount})</div>
                </div>
                <div className="recipe-difficulty">
                  {difficulty}<img src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab86e010cc8c2afa88ae_difficulty-recipes-x-webflow-template-brix-templates.svg" alt="" />
                </div>
              </div>
              
            </div>
            <div className="recipe-time-container">
              <div className='recipe-time-subContainer'>
                <div className="recipe-time text-black"><div className='d-flex column-gap-2'><img src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab8696e46ce366c217a0_preparation-time-recipes-x-webflow-template-brix-templates.svg" alt="" /> {prepTimeMinutes} min</div></div>
                <div className="food-serving text-black"><div className='d-flex column-gap-2'><img src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab862fcd64320cff8ff1_portions-recipes-x-webflow-template-brix-templates.svg " alt="" /> {servings} servings</div></div>
  
              </div>
              </div>
          </div>
      </Link>
    </>
  )
}

export default RecipeCard
