import React, { Component } from "react";
import styled from "styled-components";
//파일참조
import AuthInput from "../../components/SignIn/AuthInput";
import AuthButton from "../../components/SignIn/AuthButton";
import logoImg from "../../assets/img/logo.png";
import CenterAlignedLink from "../../components/SignIn/CenterAlignedLink";

export default class SignInContainer extends Component {
    render() {
        return (
            <CardBackground>
                <LogoImg src={logoImg} />
                <AuthContent>
                    <AuthInput label="이메일" name="email" placeholder="이메일" />
                    <AuthInput label="비밀번호" name="password" placeholder="비밀번호" type="password" />
                    <AuthButton>로그인</AuthButton>
                    <CenterAlignedLink to="/signup" />
                </AuthContent>
            </CardBackground>
        );
    }
}

const CardBackground = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
    background: #ffffff;
    border-radius: 15px;
`;

const LogoImg = styled.img`
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -80px;
`;

const AuthContent = styled.div`
    width: 300px;
    margin-top: 45%;
    margin-left: 85px;
`;
