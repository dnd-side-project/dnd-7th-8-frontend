import React from "react";
import styled from "styled-components";
import Block from "./Block";
import star_empty from "../assets/images/star_empty.png";
import star_filled from "../assets/images/star_filled.png";

const PostInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 50px;
`;

const ChapterTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    width: 100px;
    margin-bottom: 10px;
`;

export const ChapterTitleSmall = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    margin-right: 8px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const RecipeInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitleWrapper = styled.div`
    display: flex;
    margin: 0;
`;

const InfoBox = styled.div`
    display: flex;
    margin: 30px 30px 30px 0;
    flex-wrap: wrap;
`;

const LineInfoBox = styled(InfoBox)`
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0;
    padding: 30px 30px 30px 0;
`;

const StepBox = styled.div`
    display: flex;
    flex-direction: column;
    div,
    span {
        margin-bottom: 8px;
    }
`;

export const StepNum = styled.div`
    display: flex;
    background: #fff8f3;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    margin-right: 69px;
    img {
        width: 14px;
        height: 14px;
    }
`;

const Tag = styled.div`
    display: flex;
    background: #f5f5f5;
    border-radius: 100px;
    padding: 6px 12px 6px 12px;
    margin-right: 8px;
`;

const RowGrid = styled.div`
    display: flex;
    margin: 10px;
`;

const ColumnGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostInfoContainer = () => {
    return (
        <PostInfoWrapper>
            <TitleWrapper>
                <h1>레시피 이름</h1>
            </TitleWrapper>
            <RecipeInfoWrapper>
                <LineInfoBox>
                    <ChapterTitleSmall>난이도</ChapterTitleSmall>
                    <RatingWrapper>
                        <img src={star_filled} />
                        <img src={star_empty} />
                        <img src={star_empty} />
                        <img src={star_empty} />
                        <img src={star_empty} />
                    </RatingWrapper>
                    <ChapterTitleSmall>가성비</ChapterTitleSmall>
                    <RatingWrapper>
                        <img src={star_filled} />
                        <img src={star_filled} />
                        <img src={star_filled} />
                        <img src={star_filled} />
                        <img src={star_empty} />
                    </RatingWrapper>
                </LineInfoBox>
                <InfoBox>
                    <ChapterTitle>메인 음료</ChapterTitle>
                    <Info>재료1, 재료2</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>부가 재료</ChapterTitle>
                    <Info>재료1, 재료2, 재료3, 재료4</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>총 가격</ChapterTitle>
                    <Info>3,000원</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>계량 기준</ChapterTitle>
                    <Info>소주잔</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>만드는 법</ChapterTitle>
                    <StepBox>
                        <Info>
                            <StepNum>1</StepNum>
                            <span>뭐랑 뭐를 섞는다.</span>
                        </Info>
                        <Info>
                            <StepNum>2</StepNum>
                            <span>
                                뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를
                                섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑 뭐를 섞는다. 뭐랑
                                뭐를 섞는다.
                            </span>
                        </Info>
                    </StepBox>
                </InfoBox>
                <Block>
                    <div>
                        <b>추가 tip!</b>
                    </div>
                    <br />
                    <div>뭐를 섞으면 더 맛있어요</div>
                </Block>
                <LineInfoBox>
                    <ColumnGrid>
                        <RowGrid>
                            <div>닉네임</div>
                        </RowGrid>
                        <RowGrid>
                            <Tag>#태그1</Tag>
                            <Tag>#태그2</Tag> <Tag>#태그3</Tag>
                        </RowGrid>
                    </ColumnGrid>
                </LineInfoBox>
            </RecipeInfoWrapper>
        </PostInfoWrapper>
    );
};

export default PostInfoContainer;
