import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TVContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const TVPoster = styled.img`
  max-width: 100%;
`;

const TVInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const TVName = styled.h4`
  margin: 0;
`;

const TVVoteAvg = styled.span`
  margin-left: 3px;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function TV({ name, poster_path, vote_average }) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/tvs/${name}`, {
      state: { name, poster_path, vote_average },
    });
  };

  return (
    <TVContainer>
      <TVPoster
        src={IMG_BASE_URL + poster_path}
        alt="영화포스터"
        onClick={onClickImg}
      />
      <TVInfo>
        <TVName>{name}</TVName>
        <TVVoteAvg>{vote_average}</TVVoteAvg>
      </TVInfo>
    </TVContainer>
  );
}
