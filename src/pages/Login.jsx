import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrapper>
      <h1>
        이메일과 비밀번호를
        <br />
        입력해주세요.
      </h1>
      <LoginForm>
        <LoginLabel>이메일 주소</LoginLabel>
        <EmailInput type="email" placeholder="이메일" />
        <LoginLabel>비밀번호</LoginLabel>
        <PasswordInput
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        />
        <LoginButtonDesign type="submit" value="확인" />
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 525px;
  max-height: 670px;
  position: relative;
`;

const LoginForm = styled.form`
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const LoginLabel = styled.label`
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  display: block;
  padding: 15px 20px;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const PasswordInput = styled.input`
  width: 100%;
  display: block;
  padding: 15px 20px;
  border-radius: 15px;
  text-security: circle;
  -webkit-text-security: circle;
  margin-bottom: 20px;
`;

const LoginButtonDesign = styled.input`
  background-color: black;
  color: white;
  width: 100%;
  display: block;
  padding: 15px 20px;
  border-radius: 25px;
`;
