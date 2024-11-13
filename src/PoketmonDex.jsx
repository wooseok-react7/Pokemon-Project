import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DexListData from "./MOCK_DATA";
import PokemontitleImage from "./image/PokemonTitle.png";
import SearchPokemon from "./components/SearchPokemon";
import Dashboard from "./components/Dashboard";
import PoketmonCard from "./components/PoketmonCard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import { useState } from "react";

const PoketmonDex = () => {
  const [fieldPokemon, setFieldPokemon] = useState([]);

  const handleAddPokeball = (item) => {
    const pocetId = fieldPokemon.some((pokemon) => pokemon.id === item.id);
    if (pocetId) {
      return toast.success("중복된 값입니다.");
    }
    if (fieldPokemon.length < 6) {
      setFieldPokemon([...fieldPokemon, item]);
    } else {
      toast.success("6개를 초과했습니다");
    }
  };

  // 삭제
  const handleRemove = (id) => {
    setFieldPokemon((data) => data.filter((item) => item.id !== id));
  };

  // 홈으로 이동
  const navigate = useNavigate();

  const titleCilck = () => {
    navigate("/");
  };

  const handleImageCilck = (id) => {
    navigate(`/pokemon/${id}`);
  };

  const [search, setSearch] = useState("");

  const PokemonSearch = DexListData.filter((item) =>
    item.korean_name.includes(search)
  );

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <PoketmonTitle onClick={titleCilck} />

      <Dashboard handleRemove={handleRemove} fieldPokemon={fieldPokemon} />
      <DexField>
        <SearchPokemon
          search={search}
          PokemonSearch={PokemonSearch}
          handleInput={handleInput}
          handleAddPokeball={handleAddPokeball}
        />
      </DexField>

      <PoketmonCard
        DexListData={DexListData}
        handleImageCilck={handleImageCilck}
        handleAddPokeball={handleAddPokeball}
      />
    </>
  );
};

const PoketmonTitle = styled.div`
  height: 180px;
  width: 1850px;
  background-color: #f5f4b3;
  background-image: url(${PokemontitleImage});
  background-repeat: no-repeat;
  position: fixed;
  z-index: 1;
  top: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

const DexField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 400px;
  margin-right: 400px;
  height: 200px;
  /* background-color: wheat; */
  text-align: center;
  border-radius: 1.8%;
  position: fixed;
  z-index: 1;
  top: 1px;
  left: 130px;
  border: 15%;
`;
export default PoketmonDex;
