import React, { useState, useEffect } from "react";
import style from "./InputForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InputForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handlePw = (e: any) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const onSubmitButton = async (e: any) => {
        e.preventDefault();

        if (emailValid && pwValid) {
            const res = await axios({
                headers: {
                    withCredentials: true,
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    Accept: "application/json",
                },
                method: "post",
                url: "http://mazle.ml/users/signup/",
                data: {
                    email: email,
                    password: pw,
                },
            })
                .then((res) => {
                    alert("개인 회원가입이 완료되었습니다!");
                    console.log(res);
                    // navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        if (pwValid && emailValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    return (
        <>
            <div className={style.formWrap}>
                <div className={style.inputBlockWrap}>
                    <div>
                        <div className={style.inputLabel}>이메일</div>
                        <input
                            className={style.inputForm}
                            type="text"
                            placeholder="이메일"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className={style.inputLabel}>비밀번호</div>
                    <input
                        className={style.inputFormBlock}
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={handlePw}
                    />
                    <div className={style.errorMessageWrap}>
                        {!pwValid && pw.length > 0 && <div>올바른 비밀번호를 입력해주세요</div>}
                    </div>
                    <div className={style.inputLabel}>비밀번호 확인</div>
                    <input
                        className={style.inputFormBlock}
                        type="password"
                        placeholder="비밀번호 다시 입력"
                        value={pw}
                        onChange={handlePw}
                    />
                    <div className={style.errorMessageWrap}>
                        {!pwValid && pw.length > 0 && <div>올바른 비밀번호를 입력해주세요</div>}
                    </div>
                </div>
            </div>
            <button className={style.formButton} onClick={onSubmitButton}>
                가입하기
            </button>
        </>
    );
}

export default InputForm;
