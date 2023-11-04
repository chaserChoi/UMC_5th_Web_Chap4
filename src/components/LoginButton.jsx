import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return <LoginButtonStyle onClick={handleClick}>로그인</LoginButtonStyle>;
};

export default LoginButton;

const LoginButtonStyle = styled.button`
  background-color: white;
  color: black;
  width: auto;
  display: block;
  padding: 15px 20px;
  border-radius: 25px;
`;
