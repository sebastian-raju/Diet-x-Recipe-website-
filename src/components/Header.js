import React from 'react'
import './styles/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header({handleClick , recipeCards, recipeCardsCopy, setRecipeCardsCopy, searchText, setSearchText, recipeHeading, setRecipeHeading}) {


  const searchRecipe = () => {
    const data = recipeCards.filter(obj => (obj.name + obj.tags.join()).toLowerCase().includes(searchText.toLowerCase()))
    setRecipeCardsCopy(data);

    if(searchText === ''){
      setRecipeHeading("All recipes")
    }

    if(document.querySelector('.all-btn').classList.contains('is-toggled')){
      document.querySelector('.is-toggled').classList.remove('is-toggled');
      
    }
    else if(document.querySelector('.breakfast-btn').classList.contains('is-toggled')){
      document.querySelector('.is-toggled').classList.remove('is-toggled');
      
    }
    else if(document.querySelector('.lunch-btn').classList.contains('is-toggled')){
      document.querySelector('.is-toggled').classList.remove('is-toggled');
      
    }
    else if(document.querySelector('.dinner-btn').classList.contains('is-toggled')){
      document.querySelector('.is-toggled').classList.remove('is-toggled');
      
    }
    else if(document.querySelector('.dessert-btn').classList.contains('is-toggled')){
      document.querySelector('.is-toggled').classList.remove('is-toggled');
      
    }

    
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="py-0" fixed='top'>
      <Container fluid="md" className='header-container py-md-4 py-3 px-5'>
        <Navbar.Brand href="#home"><Link to={'/'}><img
                  src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/62d5ffdaf8517749febafba6_logo-diet-webflow-template.svg" 
                  alt="" 
                  width="100"
                  height="60"
                  className="d-inline-block align-center me-2" onClick={()=>{
                    window.scrollTo(0,0)
                  }} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none border-0'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex flex-lg-row flex-column align-items-start justify-content-center">
            <Nav.Link className='text-black' href="#features">Home</Nav.Link>
            <Nav.Link className='text-black' href="#pricing">About</Nav.Link>
            <Nav.Link className='text-black' href="#pricing">Recipes</Nav.Link>
            <Nav.Link className='text-black' href="#pricing">Pages</Nav.Link>
            
          </Nav>
          <Nav className='d-flex flex-lg-row flex-column align-items-start justify-content-center'>
            <Nav.Link className='input-main-container'>
              <div className='input-container '>
                <input className='search-box ' spellCheck="false" type="text" name="" id="" onKeyDown={(e)=>{
                  if(e.key === 'Enter'){
                    searchRecipe();
                    handleClick();
                  }
                }} placeholder='Search for recipes' value={searchText} 
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
                <div className='search-icon' onClick={()=>{
                  handleClick();
                  searchRecipe();
                }} ><i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i></div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
