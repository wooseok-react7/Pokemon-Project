import styled from "styled-components";
import React from "react";
import PoketmonHomeImage from "./image/PoketmonHome.png";
import PokemonWooseokImg from "./image/PokemonWooseok.png";
import PoketMonButtonImage from "./image/PoketmonButton.png";
import { useNavigate } from "react-router-dom";

const PokemonImg = styled.img`
  transform: scaleX(-1);
`;

const Home = () => {
  const navigate = useNavigate();

  const handleDigimonHomeButton = () => {
    navigate("/PoketmonDex");
  };

  return (
    <Wrap>
      <HomeImageContainer>
        <PoketmonImage src={PoketmonHomeImage} alt="PoketmonHome" />
        <PoketMonButton
          src={PoketMonButtonImage}
          onClick={handleDigimonHomeButton}
        />
        <PokemonImg src={PokemonWooseokImg} />
      </HomeImageContainer>
    </Wrap>
  );
};

const HomeImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const PoketmonImage = styled.img`
  width: 600px;
  height: 50%;
  margin-left: 61px;
  object-fit: contain;
  transform: translateX(-10%) scaleX(-1);
`;

const PoketMonButton = styled.img`
  width: 250px;
  left: 37%;
  transform: translateX(-50%);
  object-fit: contain;
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;

export default Home;
