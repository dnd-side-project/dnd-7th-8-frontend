import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

const LogoImg = styled.img`
    width: 78px;
    height: 56px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoImg src={logo} />
        </HeaderContainer>
    );
};

export default Header;
