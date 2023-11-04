import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginControl from "./LoginControl";

const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
        <NavLink to="/">
          <Logo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </NavLink>
        <NavLink to="/movies">영화</NavLink>
        <NavLink to="/tv">TV 프로그램</NavLink>
        <NavLink to="/celebrity">인물</NavLink>
      </NavLinks>
      <LoginControlWrapper>
        <LoginControl />
      </LoginControlWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #22254b;
`;

const Logo = styled.img`
  width: 154px;
  height: 20px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
`;

const LoginControlWrapper = styled.div`
  margin-left: 20px;
`;

export default Header;
