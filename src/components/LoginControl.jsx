import React, { Component } from "react";
import styled from "styled-components";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>로그아웃</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>로그인</button>;
    }

    const greeting = isLoggedIn ? "환영합니다!" : "로그인 해주세요!";

    return (
      <ButtonWrapper>
        <LoginButton>{button}</LoginButton>
        <LoginState>{greeting}</LoginState>
      </ButtonWrapper>
    );
  }
}

const LoginButton = styled.button`
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginState = styled.div`
  color: white;
`;

export default LoginControl;
