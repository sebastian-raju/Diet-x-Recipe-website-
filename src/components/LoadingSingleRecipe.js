import React from 'react'
import './styles/LoadingSingleRecipe.css'
import { Container } from 'react-bootstrap'


function LoadingSingleRecipe() {
  return (
    <>
      <div className="top-portion">        
      </div>
       <Container fluid = "md">
        <div className="bottom-portion">
          <div className="loading-left-section p-5">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div className="loading-right-section p-5">
          <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default LoadingSingleRecipe
