import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function TVDetail() {
  const { name } = useParams();
  const { state } = useLocation();

  console.log(name);
  console.log(state);

  return (
    <TVDetailContainer>
      <PosterImg src={IMG_BASE_URL + state.poster_path} alt={name} />
      <h1>{name}</h1>
    </TVDetailContainer>
  );
}

const PosterImg = styled.img`
  width: 250px;
  margin-right: 16px;
  margin-top: 10px;
`;

const TVDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
