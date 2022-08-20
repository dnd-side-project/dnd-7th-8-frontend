import React from "react";
import styled from "styled-components";
import PostImgContainer from "../components/PostImgContainer";
import PostInfoContainer from "../components/PostInfoContainer";

const DetailContainer = styled.div`
    display: flex;
    margin: 20px;
`;

const RecipeDetail = () => {
    return (
        <DetailContainer>
            <PostImgContainer />
            <PostInfoContainer />
        </DetailContainer>
    );
};

export default RecipeDetail;
