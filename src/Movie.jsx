import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const MoviePoster = styled.img`
  max-width: 100%;
`;

const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const MovieTitle = styled.h4`
  margin: 0;
`;

const MovieVoteAvg = styled.span`
  margin-left: 3px;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average }) {
  return (
    <MovieContainer>
      <MoviePoster src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieVoteAvg>{vote_average}</MovieVoteAvg>
      </MovieInfo>
    </MovieContainer>
  );
}
