import styled from 'styled-components';
import IDFront from "../assets/idFront.jpg";
import IDBack from "../assets/idBack.jpg";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">

          <div className="front">
            <img src={IDFront} alt="ID Front" className="id-img" />
          </div>

          <div className="back">
            <div className="back-content">
              <img src={IDBack} alt="ID Back" className="id-img" />
            </div>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 300px;
    cursor: pointer;
    perspective: 1000px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 600ms ease;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .front {
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
    z-index: 1;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    border-radius: 5px;
    overflow: hidden;
    z-index: 2;
  }

  .id-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export default Card;