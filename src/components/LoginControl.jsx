import React, { Component } from "react";
import styled from "styled-components";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <div onClick={this.handleLogoutClick}>로그아웃</div>;
    } else {
      button = <div onClick={this.handleLoginClick}>로그인</div>;
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

const LoginButton = styled.div`
  background-color: white;
  margin-right: 10px;
  border-radius: 5px;
  padding: 5px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justified-content: center;
  flex-direction: row;
`;

const LoginState = styled.div`
  color: white;
`;

export default LoginControl;
