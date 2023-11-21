import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieContainer = styled.div`
  position: relative;
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

const MovieCardForeground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 250px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const MovieCardOverviewFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  top: 7.74vw;
  text-align: left;
  gap: 4.68vw;
`;

const MovieCardOverviewTitle = styled.b`
  font-size: 1.25vw;
`;

const MovieCardOverviewDescription = styled.div`
  font-size: 0.958vw;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const navigate = useNavigate();
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const onClickImg = () => {
    navigate(`/movies/${title}`, {
      state: { title, poster_path, vote_average },
    });
  };

  return (
    <MovieContainer
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <MoviePoster
        src={IMG_BASE_URL + poster_path}
        alt="영화포스터"
        onClick={onClickImg}
      />

      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieVoteAvg>{vote_average}</MovieVoteAvg>
      </MovieInfo>
      {mouseOver ? (
        <MovieCardForeground>
          <MovieCardOverviewFrame>
            <MovieCardOverviewTitle>{title}</MovieCardOverviewTitle>
            <MovieCardOverviewDescription>
              {overview}
            </MovieCardOverviewDescription>
          </MovieCardOverviewFrame>
        </MovieCardForeground>
      ) : null}
    </MovieContainer>
  );
}
