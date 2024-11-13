import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import DexListData from "../MOCK_DATA";
import { PokemonContext } from "../PokemonContext";

const InputAdd = styled.div`
  position: fixed;
  top: 80px;
  right: 100px;
  width: 200px;
  padding: 10px;
  background-color: #f5f4b3;
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #222;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 4px 4px 4px rgba(15, 15, 15, 0.315),
    4px 4px 4px rgba(28, 28, 28, 0.13);
  border-radius: 25px;
  background-clip: padding-box;

  &:focus {
    padding-bottom: 10px;
  }

  &::placeholder {
    color: #222;
    text-transform: uppercase;
    transition: all 0.3s ease;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  &:focus::placeholder {
    color: #999;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background: none; /* 흰색 배경 제거 */
  border: none; /* 검은색 테두리 제거 */
  outline: none; /* 포커스 시 나타나는 외곽선 제거 */
  color: #222;
  font-size: 16px;
`;

const SearchPokemon = ({}) => {
  const [search, setSearch] = useState("");

  const { handleAddPokeball } = useContext(PokemonContext);

  const PokemonSearch = DexListData.filter((item) =>
    item.korean_name.includes(search)
  );

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <InputAdd>
      <StyledInput
        value={search}
        type="text"
        placeholder="포켓몬을 입력해주세요"
        onChange={handleInput}
      ></StyledInput>
      {search &&
        PokemonSearch.map((item) => (
          <div key={item.id}>
            <img src={item.img_url} alt={item.korean_name} />
            <p>{item.korean_name}</p>
            <button onClick={() => handleAddPokeball(item)}>추가</button>
          </div>
        ))}
    </InputAdd>
  );
};

export default SearchPokemon;
