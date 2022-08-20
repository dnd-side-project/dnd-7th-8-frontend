import React from "react";
import styled from "styled-components";
import img27 from "../assets/images/image27.png";
import heaert18 from "../assets/images/heart_18.png";

const CardContainer = styled.div`
    display: flex;
    width: 282px;
    height: 338px;
    flex-direction: column;
    border-radius: 12px;
    border: solid 1px #f5f5f5;
    margin: 12px;
`;

const CardImg = styled.img`
    display: flex;
    width: 282px;
    border-radius: 12px 12px 0 0;
`;

const Name = styled.div``;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;
    width: 258px;
    font-size: 16px;
`;

const TagWrapper = styled.div`
    display: flex;
`;

const Tag = styled.span`
    display: flex;
    flex-direction: column;
    margin: 5px;
`;

const HeartWrapper = styled.div`
    box-sizing: border-box;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`;

const Heart = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 18px;
        height: 18px;
    }
`;

const RecipeCard = () => {
    return (
        <CardContainer>
            <CardImg src={img27} />

            <Info>
                <Name>레시피 이름</Name>
                <HeartWrapper>
                    <TagWrapper>
                        <Tag>#태그1</Tag>
                        <Tag>#태그2</Tag>
                    </TagWrapper>
                    <Heart>
                        <img src={heaert18} />
                        <span>100</span>
                    </Heart>
                </HeartWrapper>
            </Info>
        </CardContainer>
    );
};

export default RecipeCard;
