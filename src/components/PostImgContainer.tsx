import React from "react";
import styled from "styled-components";
import image27 from "../assets/images/image27.png";
import eye from "../assets/images/eye.png";
import heart from "../assets/images/heart_18.png";

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RecipeImg = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 12px;
`;

const PostInfo = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #a8a8a8;
    margin-top: 13px;
`;

const PostItem = styled.div`
    display: flex;
    margin-right: 16px;
    align-items: center;
`;

const PostImgContainer = ({ recipeInfo }: any) => {
    return (
        <ImgContainer>
            <RecipeImg src={recipeInfo.img !== "" ? recipeInfo : image27} />
            <PostInfo>
                <PostItem>
                    <img src={heart} />
                    {recipeInfo.like_cnt}
                </PostItem>
                <PostItem>
                    <img src={eye} />
                    100
                </PostItem>
            </PostInfo>
        </ImgContainer>
    );
};

export default PostImgContainer;
