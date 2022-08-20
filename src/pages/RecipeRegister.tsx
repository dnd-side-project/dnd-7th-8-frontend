import React from "react";
import styled, { css } from "styled-components";
import { Bar } from "../components/Block";
import { ChapterTitleSmall, RatingWrapper, StepNum } from "../components/PostInfoContainer";
import star_empty from "../assets/images/star_empty.png";
import star_filled from "../assets/images/star_filled.png";
import plus_btn from "../assets/images/plus_btn.png";
import add_drink from "../assets/images/add_drink.png";
import { CustomCheckbox } from "../components/FilterItem";

const TabBlock = styled(Bar)<{ checked?: boolean }>`
    background: ${(prop) => (prop.checked ? "#fafaf6" : "white")};
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 282px;
    margin-right: 24px;
`;

const FormWrapper = styled.div`
    width: 894px;
`;

const BlockWrapper = styled.div`
    width: 100%;
    border: 1px solid #f5f5f5;
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 28px;
`;

const OptionContainer = styled.div`
    display: flex;
    margin: 40px;
    justify-content: flex-start;
`;

const OptionName = styled.div`
    width: 150px;
    font-size: 16px;
    font-weight: bold;
`;

const InputContainer = styled.div`
    display: flex;
    padding: 14px 16px 14px 12px;
    background: #f5f5f5;
    border-radius: 8px;
    border: none;
    width: 100%;
    margin-bottom: 8px;
    justify-content: space-between;
`;

const StartInputContainer = styled(InputContainer)`
    justify-content: flex-start;
`;

const SmallInputContainer = styled(InputContainer)`
    font-size: 14px;
    width: 260px;
`;

const CustomInput = styled.input`
    border: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    width: 80%;
`;

const InputRightFloat = styled.div`
    display: flex;
    color: #777777;
    font-size: 12px;
    &:hover {
        cursor: pointer;
    }
`;

const SubOption = styled.div`
    width: 588px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const OrderRound = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 37px;
    color: #222222;
    input {
        margin-right: 4px;
    }
`;

const ImportImage = styled.div`
    width: 180px;
    height: 180px;
    background: #f5f5f5;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        &:hover {
            cursor: pointer;
        }
    }
`;

const AddDrinkBtn = styled.div`
    width: 128px;
    height: 142px;
    &:hover {
        cursor: pointer;
    }
`;

const GrayButton = styled.button`
    width: 290px;
    height: 48px;
    background: #f5f5f5;
    border-radius: 8px;
    font-size: 14px;
    color: #a8a8a8;
    border: none;
    text-align: left;
    padding-left: 14px;
    &:hover {
        cursor: pointer;
    }
`;

const RecipeRegister = () => {
    return (
        <ContentWrapper>
            <TabWrapper>
                <TabBlock checked={true}>논알콜</TabBlock>
                <TabBlock>알콜</TabBlock>
            </TabWrapper>
            <FormWrapper>
                <BlockWrapper>
                    <h2>레시피 정보</h2>
                    <OptionContainer>
                        <OptionName>완성 사진</OptionName>
                        <SubOption>
                            <ImportImage>
                                <img src={plus_btn} />
                            </ImportImage>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>레시피 이름</OptionName>
                        <SubOption>
                            <InputContainer>
                                <CustomInput placeholder="레시피 이름을 적어주세요" />
                                <InputRightFloat>0/25</InputRightFloat>
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>한줄 설명</OptionName>
                        <SubOption>
                            <InputContainer>
                                <CustomInput placeholder="레시피 이름을 적어주세요" />
                                <InputRightFloat>0/50</InputRightFloat>
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>별점 평가</OptionName>
                        <SubOption>
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
                                <img src={star_empty} />
                                <img src={star_empty} />
                                <img src={star_empty} />
                                <img src={star_empty} />
                            </RatingWrapper>
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <h2>재료</h2>
                    <OptionContainer>
                        <OptionName>메인 음료</OptionName>
                        <SubOption>
                            <AddDrinkBtn>
                                <img src={add_drink} />
                            </AddDrinkBtn>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>부가 재료</OptionName>
                        <SubOption>
                            <OrderRound>
                                <SmallInputContainer>
                                    <CustomInput placeholder="부가재료를 적어주세요" />
                                    <InputRightFloat>x</InputRightFloat>
                                </SmallInputContainer>
                                <SmallInputContainer>
                                    <CustomInput placeholder="부가재료를 적어주세요" />
                                    <InputRightFloat>x</InputRightFloat>
                                </SmallInputContainer>
                            </OrderRound>
                            <GrayButton>+ 부가재료 추가</GrayButton>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>총 가격</OptionName>
                        <SubOption>
                            <SmallInputContainer>
                                <CustomInput placeholder="총 재료의 가격을 입력해주세요" />
                                <InputRightFloat>x</InputRightFloat>
                            </SmallInputContainer>
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <h2>방법 설명</h2>
                    <OptionContainer>
                        <OptionName>계량 기준</OptionName>
                        <SubOption>
                            <CheckboxWrapper>
                                <CustomCheckbox type="checkbox" value="paper_cup" />
                                종이컵
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <CustomCheckbox type="checkbox" value="soju_cup" />
                                소주잔
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <CustomCheckbox type="checkbox" value="beer_cup" />
                                맥주잔
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <CustomCheckbox type="checkbox" value="drink_cup" />
                                음료기준
                            </CheckboxWrapper>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>만드는 법</OptionName>
                        <SubOption>
                            <StartInputContainer>
                                <StepNum>1</StepNum>
                                <OrderRound>
                                    <CustomInput placeholder="만드는 방법을 입력해주세요" />
                                    <InputRightFloat>x</InputRightFloat>
                                </OrderRound>
                            </StartInputContainer>
                            <StartInputContainer>
                                <StepNum>2</StepNum>
                                <OrderRound>
                                    <CustomInput placeholder="만드는 방법을 입력해주세요" />
                                    <InputRightFloat>x</InputRightFloat>
                                </OrderRound>
                            </StartInputContainer>
                            <GrayButton>+ 방법 추가</GrayButton>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>참고 Tip!</OptionName>
                        <SubOption>
                            <InputContainer>
                                <CustomInput placeholder="참고하면 좋을 나만의 tip을 알려주세요!" />
                                <InputRightFloat>x</InputRightFloat>
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <h2>태그 추가</h2>
                    <OptionContainer>
                        <OptionName>태그</OptionName>
                        <SubOption>
                            <InputContainer>
                                <CustomInput placeholder="#태그 입력(최대 10개)" />
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
            </FormWrapper>
        </ContentWrapper>
    );
};

export default RecipeRegister;
