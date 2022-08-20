import React from "react";
import styled from "styled-components";
import style from "./Banner.module.css";

function Banner() {
    return (
        <DrinkMainContainer>
            <DrinkMainTitle>음료 냉장고</DrinkMainTitle>
            <DrinkMainSubTitle>마즐러가 찾는 음료라면 냉장고에 다 넣어줄게요</DrinkMainSubTitle>
        </DrinkMainContainer>
    );
}

export default Banner;

const DrinkMainContainer = styled.div`
    font-family: "SUIT-Variable";
    padding: 7% 0% 4% 10%;
    background-color: #fafaf6;
`;

const DrinkMainTitle = styled.div`
    font-size: 2rem;
    font-weight: 900;
`;

const DrinkMainSubTitle = styled.div`
    margin-top: 10px;
    font-size: 1rem;
`;
