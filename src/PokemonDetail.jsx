// import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DexListData from "./MOCK_DATA";
import styled from "styled-components";
import PokemonCard from "./image/poketmon2.jpg";

const emoji = {
  벌레: "🐛",
  풀: "🌿",
  비행: "🪽",
  독: "🐍",
  물: "💧",
  땅: "⌛",
  노말: "🫵",
  격투: "🥊",
  불꽃: "🔥",
  에스퍼: "🧙‍♂️",
  바위: "🪨",
  강철: "⛓️",
  얼음: "🧊",
  고스트: "👻",
  전기: "⚡",
  페어리: "🧚",
  드래곤: "🐉",
};

const PokemonDetail = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = DexListData.find((data) => data.id === parseInt(id));

  return (
    <Wrapper>
      <Detail>
        <PokemonInage src={pokemon.img_url} />
        <H1>{pokemon.korean_name}</H1>
        <TypeEmojisContainer>
          {pokemon.types.map((type, index) => (
            <TypeEmoji key={index}>{emoji[type]}</TypeEmoji>
          ))}
        </TypeEmojisContainer>
        <P onClick={() => navigate(-1)}>뒤로 가기</P>
      </Detail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 전체 화면 높이에 맞춤 */
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  background-image: url(${PokemonCard});
  background-size: cover; /* 이미지를 컨테이너에 맞게 조정 */
  background-position: center; /* 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
`;

const PokemonInage = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 100px;
`;

const H1 = styled.div`
  position: relative;
  top: -100px;
  font-size: 50px;
`;

const P = styled.div`
  position: relative;
  top: -48px;
  left: 65px;
`;
const TypeEmoji = styled.span`
  font-size: 24px; /* 이모지 크기를 설정 */
  margin: 5px; /* 간격을 원하는 대로 조정 */
`;
const TypeEmojisContainer = styled.div`
  position: relative;
  top: -442px;
  left: 121px;
  background-color: #fa4032;
  border-radius: 10px;
`;

export default PokemonDetail;
