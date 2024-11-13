import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemontitleImage from "./image/PokemonTitle.png";
import SearchPokemon from "./components/SearchPokemon";
import Dashboard from "./components/Dashboard";
import PoketmonCard from "./components/PoketmonCard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PokemonContext } from "./PokemonContext";
import DexListData from "./MOCK_DATA";
// import { useState } from "react";

const PoketmonDex = () => {
  const [fieldPokemon, setFieldPokemon] = useState([]);

  // 홈으로 이동
  const navigate = useNavigate();

  const titleCilck = () => {
    navigate("/");
  };

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

  // const handleImageCilck = (id) => {
  //   navigate(`/pokemon/${id}`);
  // };

  return (
    <PokemonContext.Provider
      value={{ fieldPokemon, setFieldPokemon, handleAddPokeball }}
    >
      <ToastContainer />
      <PoketmonTitle onClick={titleCilck} />

      <Dashboard />
      <DexField>
        <SearchPokemon />
      </DexField>

      <PoketmonCard DexListData={DexListData} />
    </PokemonContext.Provider>
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
