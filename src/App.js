import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.css';
import { useRef, useState } from 'react';
import SingleRecipe from './pages/SingleRecipe';

function App() {

  const [recipeCards, setRecipeCards] = useState([]);
  const [recipeCardsCopy, setRecipeCardsCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [recipeHeading, setRecipeHeading] = useState("All recipes");

  const targetRef = useRef(null);

  // const scrollToTarget = () => {
  //   // Scroll to the target element
  //   targetRef.current.scrollIntoView({ behavior: 'smooth'});
  // };


  const scrollToTarget = () => {
    const yOffset = -150; // Adjust the value as needed, negative value to scroll up
    const targetElement = targetRef.current;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">

        <Header 
        handleClick={scrollToTarget}
        recipeCards = {recipeCards}
        recipeCardsCopy = {recipeCardsCopy}
        setRecipeCardsCopy = {setRecipeCardsCopy}
        searchText = {searchText}
        setSearchText = {setSearchText}
        recipeHeading = {recipeHeading}
        setRecipeHeading = {setRecipeHeading}
        />
        <Routes>
  
              <Route path={'/'} element={<Home 
                    targetRef={targetRef} 
                    handleClick={scrollToTarget}
                    recipeCards = {recipeCards}
                    setRecipeCards = {setRecipeCards}
                    recipeCardsCopy = {recipeCardsCopy}
                    setRecipeCardsCopy = {setRecipeCardsCopy}
                    searchText = {searchText}
                    setSearchText = {setSearchText}
                    recipeHeading = {recipeHeading}
                    setRecipeHeading = {setRecipeHeading}
                    />}>
              </Route>

              <Route path={"/single-recipe/:id"} element={<SingleRecipe/>}></Route>
            
            
          </Routes>

        <Footer/>
     
    </div>
  );
}

export default App;
