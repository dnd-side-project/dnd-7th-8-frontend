import React from "react";
import styled from "styled-components";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

export default function NextArrow({ onClick }: NextArrowProps) {
    return <NextArrowStyle onClick={onClick}>누르면 넘어감</NextArrowStyle>;
}

const NextArrowStyle = styled.div`
    right: -25px;
    font-size: 20px;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    transition: 200ms ease-in-out;

    &:before {
        line-height: 1;
        opacity: 0.75;
        -webkit-font-smoothing: antialiased;
    }
`;
