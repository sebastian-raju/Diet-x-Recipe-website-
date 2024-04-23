import React from 'react'
import './styles/Footer.css'
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <>
      <Container fluid ="md" className='footer-section px-4 py-md-5 pb-5 border-bottom'>
        <div className="footer-left-section">
          <div className="footer-logo-container">
          <img 
                  src="https://assets-global.website-files.com/61003f4656f603345ac4b0ab/62d5ffdaf8517749febafba6_logo-diet-webflow-template.svg" 
                  alt="" 
                  width="150"
                  height="80"
                  className="d-inline-block align-center me-2"  />
          </div>
          <div className="footer-subtitle">
          Explore a treasure trove of culinary inspiration with our wide range of recipes, carefully crafted to tantalize your taste buds and ignite your passion for cooking. 
          </div>
        </div>

        <div className="footer-right-section">
          <div className="footer-input-container">
            <input className='subscribe-input' type="text" name="" id="" placeholder='Enter your email'/>
            <button className='subscribe-btn'>Subscribe</button>
          </div>
           
          <div className="right-side-subtitle">
            Join the 10,000+ persons that choose healthy food
          </div>
        </div>
      </Container>

      <Container fluid ="md" className='sub-footer-section   px-4 py-5'>
        <div className="diet-x-container">
          <div className='fw-bold'>Diet X</div>
          <div>About</div>
          <div>Contact</div>
          <div>Office</div>
          <div>Media mentions</div>
          <div>sponsored content</div>
        </div>

        <div className="food-recipe-container">
          <div className='fw-bold'>Food & Recipes</div>
          <div>Sugar Free January</div>
          <div>freezer Meals</div>
          <div>Quick and easy recipes</div>
          <div>Instant Pot Recipes</div>
          <div>Pasta Recipes</div>
        </div>

        <div className="get-touch-container">
          <div className='mb-4'>Get in touch with us</div>
          <div className='d-flex column-gap-3'>
            <i className="fa-brands fa-facebook fa-xl"></i>
            <i className="fa-brands fa-instagram fa-xl"></i>
            <i className="fa-brands fa-twitter fa-xl"></i>
          </div>
        </div>
        </Container>


      {/*  footer -3 */}
      <div className='footer-wrapper'>
        <Container fluid ="md" className='bottom-footer-section   px-4 py-5 '>
        Copyright © Diet X | Designed by BRIX Templates - Powered by Sebastian Raju
        </Container>
      </div>
    </>
  )
}

export default Footer
