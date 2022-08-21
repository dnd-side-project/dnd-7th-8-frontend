import React from "react";
import style from "./PrivateSignUp.module.css";
import InputForm from "../../components/SignUp/InputForm";
import styled from "styled-components";

function SignUpContainer() {
    return (
        <BackgroundContainer>
            <div className={style.signUpWrap}>
                <div className={style.titleWrap}>
                    <div className={style.title}>회원가입</div>
                </div>
                <InputForm />
            </div>
        </BackgroundContainer>
    );
}

export default SignUpContainer;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafaf6;
`;
