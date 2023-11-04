import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  console.log(title);
  console.log(state);

  return (
    <MovieDetailContainer>
      <PosterImg src={IMG_BASE_URL + state.poster_path} alt={title} />
      <h1>{title}</h1>
    </MovieDetailContainer>
  );
}

const PosterImg = styled.img`
  width: 250px;
  margin-right: 16px;
  margin-top: 10px;
`;

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
