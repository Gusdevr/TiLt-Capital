import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import styled from "styled-components"
import BarnerSlide from "../../assets/img/barnerpainels.png"


const StyledAwesomeSlider = styled(AwesomeSlider)`
  position: absolute;
  left: 82.1%;
  bottom: 40%;
  width: 300px;
  height: 150px;
  margin: 0 auto;

  .awssld__content h3 {
    position: absolute;
    top: 30px;
  }

  .awssld__content img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .awssld__bullets button {
    background-color: #235784;
    width: 8px;
    height: 8px;
  }

  .awssld__content {
    background-color: #edebeb;
  }

  .awssld__sld3 img {
    background-color: red;
    width: 300px;
    height: 170px;
  }

  .awssld__content .awssld__controls__item {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;

const Carousel = () => {
  return (
    <StyledAwesomeSlider>
      <div>
        <div className="awssld__content">
          <h3>Direct Earn</h3>
          <p>Investimento direto,<br /> 
             simples e rápido</p>
        </div>
      </div>
      <div>
        <div className="awssld__content">
          <h3>Trading</h3>
          <p>Trading de criptomedas,<br /> 
             com sistema avançado</p>
        </div>
 
      </div>
      <div>
        
        <div className="awssld__sld3">
        <img
          src={BarnerSlide}
          alt="Slide 3"
        />
          
        </div>
      </div>
    </StyledAwesomeSlider>
  )
}

export default Carousel;
