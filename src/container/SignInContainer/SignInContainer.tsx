import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//파일참조
import AuthInput from "../../components/SignIn/AuthInput";
import AuthButton from "../../components/SignIn/AuthButton";
import logoImg from "../../assets/img/logoimg.png";
import CenterAlignedLink from "../../components/SignIn/CenterAlignedLink";
import RememberCheck from "../../components/SignIn/RememberCheck";
import style from "./signin.module.css";

const User = {
    id: "test1234@naver.com",
    pw: "@test1234",
};

export const removeWhitespace = (text: string) => {
    const regex = /\s/g;
    return text.replace(regex, "");
};

const SignInContainer: React.FC = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(true);
    const [notAllow, setNotAllow] = useState(true);

    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPw, setSavedLoginPw] = useState("");
    let sessionStorage = window.sessionStorage;
    const navigate = useNavigate();
    const handleId = (e: any) => {
        const changedEmail = removeWhitespace(e.target.value);
        setId(changedEmail);

        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g;
        if (regex.test(id)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    };

    const handlePassword = (e: any) => {
        const changedPassword = removeWhitespace(e.target.value);
        setPw(changedPassword);
    };

    const onSubmitButton = (e: any) => {
        // if(idValid && pwValid) {
        e.preventDefault();
        console.log(id, pw);
        axios
            .post(`http://mazle.ml/users/login/`, { email: id, passwd: pw })
            .then((response) => {
                alert("로그인에 성공했습니다!");
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // if (id === User.id && pw === User.pw) {
        //     alert("로그인에 성공했습니다!");
        //     sessionStorage.setItem("id", id);
        //     sessionStorage.setItem("pw", pw);

        //     // setSavedLoginId(sessionStorage.getItem("id"));
        //     // setSavedLoginPw(sessionStorage.getItem("pw"));
        //     setSavedLoginId(id);
        //     setSavedLoginPw(pw);
        //     window.location.href = "/";
        // } else {
        //     alert("등록되지 않은 회원입니다.");
        // }
    };

    useEffect(() => {
        if (idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [idValid, pwValid]);

    return (
        <CardBackground>
            <ContentWrap>
                <LogoImage src={logoImg} />
                <Wrapper>
                    <InputTitle>이메일</InputTitle>
                    <InputWrap isValid={idValid}>
                        <InputForm type="text" placeholder="아이디" value={id} onChange={handleId} />
                    </InputWrap>
                    <ErrorMessageWrap>
                        {!idValid && (
                            <div style={{ textAlign: "left", fontSize: "11px" }}>
                                이메일 형식이 올바르지 않습니다<div className=""></div>
                            </div>
                        )}
                    </ErrorMessageWrap>
                    <InputTitle>비밀번호</InputTitle>
                    <InputWrap isValid={pwValid}>
                        <InputForm type="password" placeholder="비밀번호" value={pw} onChange={handlePassword} />
                    </InputWrap>
                    <ErrorMessageWrap>
                        {!pwValid && (
                            <div style={{ textAlign: "left", fontSize: "11px" }}>
                                가입되어 있지 않은 계정이거나, 이메일 또는 비밀번호가 일치하지 않습니다.
                            </div>
                        )}
                    </ErrorMessageWrap>
                </Wrapper>
            </ContentWrap>
            <div>
                <BottomButton disabled={notAllow} onClick={onSubmitButton}>
                    로그인
                </BottomButton>
                <RememberCheck />
            </div>
            <CenterAlignedLink
                to="/signup/start
            "
            />
        </CardBackground>
    );
};

export default SignInContainer;

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

const ContentWrap = styled.div`
    width: 400px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const LogoImage = styled.img`
    position: absolute;
    left: 50%;
    top: 30px;
    margin-left: -80px;
`;

const Wrapper = styled.div`
    margin-top: 10rem;
`;

const InputTitle = styled.div`
    font-size: 15px;
    font-weight: 900;
    color: #262626;
    padding-top: 10px;
    text-align: left;
`;

const InputWrap = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 10px;
    background-color: white;
    border: ${({ isValid }: { isValid: boolean }) => (isValid ? "1px solid #e2e0e0" : "1px solid #ef0000")};

    &:focus-within {
        border: 2px solid #fb5c00;
    }
`;

const InputForm = styled.input`
    width: 100%;
    outline: none;
    border: none;
    height: 16px;
    font-size: 14px;
    font-weight: 400;
    &::placeholder {
        color: #dadada;
    }
`;

const ErrorMessageWrap = styled.div`
    margin-top: 8px;
    color: #ef0000;
    font-size: 12px;
`;

const BottomButton = styled.button`
    width: 400px;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #fb5c00;
    border-radius: 10px;
    color: white;
    margin: auto;
    margin-top: 40px;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover {
        transition: all ease 0.1s;
        transform: scale(1.02);
    }

    &:disabled {
        background-color: #dadada;
        color: white;
    }
`;
