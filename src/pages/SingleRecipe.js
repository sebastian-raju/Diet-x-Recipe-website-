import React, { useEffect, useState } from 'react'
import './styles/SingleRecipe.css'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSingleRecipe from '../components/LoadingSingleRecipe';

function SingleRecipe() {
  const {id} = useParams();
  const [singleRecipe, setSingleRecipe] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${id}`)
    setSingleRecipe(result?.data);
  } 

  useEffect(()=>{
    fetchData();
    window.scrollTo(0, 0);
  },[]);

  console.log(singleRecipe);

  return   singleRecipe?.id ?  (
    <>
      <div className='single-recipe-main-image' style={{backgroundImage:`url(${singleRecipe?.image})`}}></div>
      <Container fluid = "md" className='main-single-recipe-container px-4'>
        <div className="main-recipe-details-container p-lg-5 pt-lg-4 p-4">
          <div className="single-recipe-heading">
            {singleRecipe?.name}
          </div>
          <div className="single-recipe-subheading text-muted ">
            Please follow the given instructions. feel free to experiment on ingredients. <br/>Happy cooking !
          </div>
          <div className="single-recipe-ingredients-container">
            <div className='ingredients-title'>
              Ingredients
            </div>
            <div className='main-ingredients-details text-muted' >
            {singleRecipe?.ingredients.map(i=> <div style={{display:"flex", alignItems:"start", columnGap:"15px"}}><div> ○ </div><div>{i}</div></div>)}
            </div>
          </div>

          <div className="single-recipe-instructions-container">
            <div className='instruction-title'>
              Instructions
            </div>
            <div className='main-instruction-details text-muted' >
              {singleRecipe?.instructions.map((i)=> <div style={{marginBottom:"10px"}}>{i}</div>)}
            </div>
          </div>
        </div>
        <div className="about-the-recipe-container p-lg-5  p-5">
          <div className="about-the-recipe-title">
            About the recipe
          </div>
          <div className="preperation-container">
            <img className='single-recipe-img' src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab8696e46ce366c217a0_preparation-time-recipes-x-webflow-template-brix-templates.svg" alt="" />
            <div>preperation : {singleRecipe?.prepTimeMinutes} mins</div>
          </div>

          <div className="cooktime-container">
            <img className='single-recipe-img' src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab87753e5c9687865456_cook-time-recipes-x-webflow-template-brix-templates.svg" alt="" />
            <div>cook time : {singleRecipe?.cookTimeMinutes} mins</div>
          </div>

          <div className="portions-container">
            <img className='single-recipe-img' src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab862fcd64320cff8ff1_portions-recipes-x-webflow-template-brix-templates.svg" alt="" />
            <div>portions : {singleRecipe?.servings} servings</div>
          </div>

          <div className="difficulty-container">
            <img className='single-recipe-img' src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/6101ab86e010cc8c2afa88ae_difficulty-recipes-x-webflow-template-brix-templates.svg" alt="" />
            <div>difficulty : {singleRecipe?.difficulty}</div>
          </div>
        </div>
      </Container>
    </>
  ) : <LoadingSingleRecipe/> 
}

export default SingleRecipe
