import React from "react";
import styled from "styled-components";
import PokemonMonsterBall from "../image/MonsterBall.png";
import fieldPokemon from "../MOCK_DATA";
import { toast } from "react-toastify";

const DexList = styled.div`
  margin-top: 250px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
`;

const DexListStyle = styled.div`
  display: flex;
  flex-wrap: wrap; /* 한 줄에 10개 초과 시 다음 줄로 넘김 */
  background-color: #f5f4b3;
  height: 200px;
  padding: 50px;
  justify-content: center;
  position: relative;
  margin: 50px;
  border-radius: 10%;
  box-shadow: 0px 0px 3px 1px;
  max-width: calc(100px * 10); /* 한 줄에 10개 제한 */
  text-align: center;
`;

const Pokeball = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 50px auto;
  &:hover {
    transform: scale(2);
  }
`;

const PoketmonCard = ({ DexListData, handleImageCilck, handleAddPokeball }) => {
  return (
    <div>
      <DexList>
        {DexListData.map((item) => (
          <DexListStyle key={item.korean_name}>
            <div>
              <img
                onClick={() => handleImageCilck(item.id)}
                src={item.img_url}
                style={{ cursor: "pointer" }}
              />
              <p>{item.korean_name}</p>
              <Pokeball
                src={PokemonMonsterBall}
                onClick={() => handleAddPokeball(item)}
              ></Pokeball>
            </div>
          </DexListStyle>
        ))}
      </DexList>
    </div>
  );
};

export default PoketmonCard;
