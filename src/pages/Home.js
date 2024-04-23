import React, { useEffect } from 'react'
import './styles/Home.css'
import Container from 'react-bootstrap/Container';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import Loading from '../components/Loading';


function Home({targetRef, handleClick, recipeCards, setRecipeCards, recipeCardsCopy, setRecipeCardsCopy, searchText, setSearchText,recipeHeading, setRecipeHeading}) {

  // const [recipeCards, setRecipeCards] = useState([]);
  // const [recipeCardsCopy, setRecipeCardsCopy] = useState([]);
  // const [recipeHeading, setRecipeHeading] = useState("All recipes");
  

  const fetchData = async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    setRecipeCards(response?.data?.recipes);
    setRecipeCardsCopy(response?.data?.recipes);
  }


  useEffect(()=>{
    fetchData();
  },[searchText])


  // console.log(recipeCardsCopy);

  

  const fetchBreakfast = () => {
    const data = recipeCards.filter(obj => 
      obj.mealType.includes('Breakfast')
    );
    setRecipeCardsCopy(data);
    console.log(recipeCardsCopy);
    setRecipeHeading("Breakfast Recipes");
    setSearchText("");
  }

  const fetchLunch= () => {
    const data = recipeCards.filter(obj => 
      obj.mealType.includes('Lunch')
    );
    setRecipeCardsCopy(data);
    console.log(recipeCardsCopy);
    setRecipeHeading("Lunch Recipes");
    setSearchText("")
  }

  const fetchDinner = () => {
    const data = recipeCards.filter(obj => 
      obj.mealType.includes('Dinner')
    );
    setRecipeCardsCopy(data);
    console.log(recipeCardsCopy);
    setRecipeHeading("Dinner Recipes");
    setSearchText("")
  }

  const fetchDessert = () => {
    const data = recipeCards.filter(obj => 
      obj.mealType.includes('Dessert')
    );
    setRecipeCardsCopy(data);
    console.log(recipeCardsCopy);
    setRecipeHeading("Dessert Recipes");
    setSearchText("")
  }

  const allRecipe = () => {
    setRecipeCardsCopy(recipeCards);
    setRecipeHeading("All recipes");
    setSearchText("")
  }

  


  const toggleButton = (selector) => {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {
  
      turnOffPreviousButton();
  
      button.classList.add('is-toggled');
    } else {
      button.classList.remove('is-toggled');
    }
  }

  const turnOffPreviousButton = () => {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }


  return (
    <>
    {/* Hero section if there is hero section */}
      <Container fluid="md"     className='hero-section-container'>
        <div className='left-section'>
          <div className="left-section-hero px-2">
            <div className='hero-title'>
              Come & explore our nutritious and delicious recipes
            </div>
            <div className='hero-subtitle'>
            Indulge in a culinary adventure with us as we present an array of nutritious and mouthwatering recipes. From wholesome breakfast options to satisfying dinners and everything in between, our collection caters to every palate and dietary preference.
            </div>
            <div className='hero-btn-container'>
              <button className='discover-button'onClick={()=>{
                handleClick();
              }}>discover</button>
              <button className='about-us-button'>about us</button>
            </div>
          </div>
        </div>

        <div className='right-section'>
          <div className="hero-gallery-container d-flex justify-content-center align-items-center">
            <img src="https://i.postimg.cc/85L7S7Km/Pik-Png-com-indian-png-2723544.png" alt="" />
          </div>
        </div>
      </Container>



      {/* main-recipe-heading */}
      <Container fluid='md' ref={targetRef} className='main-recipe-container px-4'>
          <div className="main-recipe-header-container pt-5">
            <div className="main-recipe-title">
              {recipeHeading}
            </div>
            <div className="main-recipe-content-container">
              <div className="main-recipe-content">
              Explore a treasure trove of culinary inspiration with our wide range of recipes, carefully crafted to tantalize your taste buds and ignite your passion for cooking.
              </div>
              <div className="main-recipe-btn-container">
                <div className='btn-container'>
                  <button className='all-btn is-toggled' onClick={()=>{
                    toggleButton('.all-btn')
                    allRecipe();
                  }}>all</button>
                  <button className='breakfast-btn' onClick={()=>{
                    toggleButton('.breakfast-btn');
                    fetchBreakfast();
                  }}>breakfast</button>
                  <button className='lunch-btn' onClick={()=>{
                    toggleButton('.lunch-btn');
                    fetchLunch();
                  }}>lunch</button>
                  <button className='dinner-btn' onClick={()=>{
                    toggleButton('.dinner-btn')
                    fetchDinner();
                  }}>dinner</button>
                  <button className='dessert-btn' onClick={()=>{
                    toggleButton('.dessert-btn')
                    fetchDessert();
                  }}>dessert</button>
                </div>
              </div>
            </div>

            <div className="searchingFor">
              {(searchText === "")? "" : (<div className='search-keyword-container'><div>Showing results for : </div>
                <div className='main-search-word'> {searchText}</div>
              </div>)}
            </div>
          </div>
      </Container>

      
      {/* main-recipe-list */}
      <Container fluid='md' className='recipe-card-container px-4'>

      {
        recipeCardsCopy.length>0?
        recipeCardsCopy.map(obj => <RecipeCard recipeObj ={obj}/>)
        :
        (<Loading/>)
      }

      </Container>

      

    </>
  )
}

export default Home
