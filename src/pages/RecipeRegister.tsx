import React, { useState } from "react";
import styled from "styled-components";
import { Bar } from "../components/Block";
import {
    ChapterTitleSmall,
    MEASURE_STANDARD,
    RatingWrapper,
    RowGrid,
    StepNum,
    Tag,
} from "../components/PostInfoContainer";
import star_empty from "../assets/images/star_empty.png";
import star_filled from "../assets/images/star_filled.png";
import plus_btn from "../assets/images/plus_btn.png";
import add_drink from "../assets/images/add_drink.png";
import { CustomCheckbox } from "../components/FilterItem";
import { getSubMeterial } from "../apis/recipe";

const TabBlock = styled(Bar)<{ checked?: boolean }>`
    background: ${(prop) => (prop.checked ? "#fafaf6" : "white")};
    &:hover {
        cursor: pointer;
    }
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
    position: relative;
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
    position: relative;
`;

const OrderRound = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
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

const RightButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    button {
        background: #fb5c00;
        border: 1px solid #fb5c00;
        border-radius: 100px;
        padding: 14px 54px 14px 54px;
        color: white;
        font-size: 16px;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
    }
`;

const FloatingBox = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    z-index: 2;
    div {
        margin: 25px;
        &:hover {
            cursor: pointer;
        }
    }
`;

const RecipeRegister = () => {
    const [isAlco, setIsAlco] = useState(false);
    const [recipeInfo, setRecipeInfo] = useState({
        img: null,
        recipe_name: "",
        summary: "",
        diff_score: 0,
        price_score: 0,
        sweet_score: 0,
        alcohol_score: 0,
    });
    const [resource, setResource] = useState({
        main_meterial: [],
        sub_meterial: [],
        price: 0,
    });
    const [desc, setDesc] = useState({ mesaure_standard: [], description: [], tip: [] });
    const [tag, setTag] = useState([]);
    const [isActiveMainSearch, setIsActiveMainSearch] = useState(false);
    const [searchedMeterial, setSearchedMeterial] = useState([]);

    const onSetRecipeInfo = (obj: object) => {
        setRecipeInfo({ ...recipeInfo, ...obj });
    };

    const onSetResource = (obj: object) => {
        setResource({ ...resource, ...obj });
    };

    const onSetDesc = (obj: object) => {
        setDesc({ ...desc, ...obj });
    };

    return (
        <ContentWrapper>
            <TabWrapper>
                <TabBlock
                    checked={!isAlco}
                    onClick={() => {
                        setIsAlco(false);
                    }}
                >
                    논알콜
                </TabBlock>
                <TabBlock
                    checked={isAlco}
                    onClick={() => {
                        setIsAlco(true);
                    }}
                >
                    알콜
                </TabBlock>
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
                                <CustomInput
                                    placeholder="레시피 이름을 적어주세요"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 25)
                                            onSetRecipeInfo({ recipe_name: e.target.value });
                                    }}
                                />
                                <InputRightFloat>{recipeInfo.recipe_name.length}/25</InputRightFloat>
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>한줄 설명</OptionName>
                        <SubOption>
                            <InputContainer>
                                <CustomInput
                                    placeholder="레시피 이름에 대한 한줄 설명을 적어주세요"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) onSetRecipeInfo({ summary: e.target.value });
                                    }}
                                />
                                <InputRightFloat>{recipeInfo.summary.length}/50</InputRightFloat>
                            </InputContainer>
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>별점 평가</OptionName>
                        <SubOption>
                            <ChapterTitleSmall>난이도</ChapterTitleSmall>
                            <RatingWrapper>
                                {[...Array(recipeInfo.diff_score)].map((n) => (
                                    <img src={star_filled} key={n} />
                                ))}
                                {[...Array(5 - recipeInfo.diff_score)].map((n) => (
                                    <img src={star_empty} key={n} />
                                ))}
                                {/* <img src={star_filled} />
                                <img src={star_empty} />
                                <img src={star_empty} />
                                <img src={star_empty} />
                                <img src={star_empty} /> */}
                            </RatingWrapper>
                            <ChapterTitleSmall>가성비</ChapterTitleSmall>
                            <RatingWrapper>
                                {[...Array(recipeInfo.price_score)].map((n) => (
                                    <img src={star_filled} key={n} />
                                ))}
                                {[...Array(5 - recipeInfo.price_score)].map((n) => (
                                    <img src={star_empty} key={n} />
                                ))}
                            </RatingWrapper>
                            {isAlco && (
                                <SubOption>
                                    <ChapterTitleSmall>단맛</ChapterTitleSmall>
                                    <RatingWrapper>
                                        {[...Array(recipeInfo.sweet_score)].map((n) => (
                                            <img src={star_filled} key={n} />
                                        ))}
                                        {[...Array(5 - recipeInfo.sweet_score)].map((n) => (
                                            <img src={star_empty} key={n} />
                                        ))}
                                    </RatingWrapper>
                                    <ChapterTitleSmall>알콜 농도</ChapterTitleSmall>
                                    <RatingWrapper>
                                        {[...Array(recipeInfo.alcohol_score)].map((n) => (
                                            <img src={star_filled} key={n} />
                                        ))}
                                        {[...Array(5 - recipeInfo.alcohol_score)].map((n) => (
                                            <img src={star_empty} key={n} />
                                        ))}
                                    </RatingWrapper>
                                </SubOption>
                            )}
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
                <BlockWrapper>
                    <h2>재료</h2>
                    <OptionContainer>
                        <OptionName>메인 음료</OptionName>
                        <SubOption>
                            <AddDrinkBtn
                                onClick={() => {
                                    setIsActiveMainSearch(true);
                                }}
                            >
                                <img src={add_drink} />
                            </AddDrinkBtn>
                            {isActiveMainSearch && (
                                <FloatingBox>
                                    <div>딸기</div>
                                    <div>바나나</div>
                                    <div>딸기</div>
                                    <div>바나나</div>
                                    <div>딸기</div>
                                    <div>바나나</div>
                                    <div>딸기</div>
                                    <div>바나나</div>
                                </FloatingBox>
                            )}
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>부가 재료</OptionName>
                        <SubOption>
                            <OrderRound>
                                {resource.sub_meterial.length > 0 &&
                                    resource.sub_meterial.map((meterial: any) => (
                                        <SmallInputContainer>
                                            {meterial}
                                            <InputRightFloat>x</InputRightFloat>
                                        </SmallInputContainer>
                                    ))}
                            </OrderRound>
                            <OrderRound>
                                <SmallInputContainer>
                                    <CustomInput
                                        placeholder="부가재료를 적어주세요"
                                        // onClick={() => {
                                        //     setIsActiveSubSearch(true);
                                        // }}
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            getSubMeterial(
                                                { meterial_name: e.target.value },
                                                (res: any) => {
                                                    console.log(res);
                                                    setSearchedMeterial(res.data.meterial_name);
                                                },
                                                () => {
                                                    console.log("fail");
                                                },
                                            );
                                        }}
                                    />
                                    <InputRightFloat>x</InputRightFloat>
                                    {searchedMeterial.length > 0 && (
                                        <FloatingBox>
                                            {searchedMeterial.map((meterial) => (
                                                <div
                                                    onClick={() => {
                                                        onSetResource({
                                                            sub_meterial: [...resource.sub_meterial, meterial],
                                                        });
                                                        setSearchedMeterial([]);
                                                    }}
                                                >
                                                    {meterial}
                                                </div>
                                            ))}
                                        </FloatingBox>
                                    )}
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
                            {Object.entries(MEASURE_STANDARD).map((measure) => (
                                <CheckboxWrapper>
                                    <CustomCheckbox
                                        type="checkbox"
                                        value={measure[0]}
                                        onChange={() => {
                                            // const measure: any = measure[0];
                                            // if (
                                            //     desc.mesaure_standard.length > 0 &&
                                            //     desc.mesaure_standard.indexOf(measure) !== -1
                                            // ) {
                                            //     const arr = desc.mesaure_standard.filter(
                                            //         (standard: any): any => standard !== measure,
                                            //     );
                                            //     onSetDesc({
                                            //         measure_standard: arr,
                                            //     });
                                            // } else if (
                                            //     desc.mesaure_standard.length > 0 &&
                                            //     !desc.mesaure_standard.includes(measure)
                                            // ) {
                                            //     onSetDesc({
                                            //         measure_standard: [...desc.mesaure_standard, measure],
                                            //     });
                                            // }
                                        }}
                                    />
                                    {measure[1]}
                                </CheckboxWrapper>
                            ))}
                        </SubOption>
                    </OptionContainer>
                    <OptionContainer>
                        <OptionName>만드는 법</OptionName>
                        <SubOption>
                            {desc.description.length > 0 &&
                                desc.description.map((description: any, index) => (
                                    <StartInputContainer>
                                        <StepNum>{index + 1}</StepNum>
                                        <OrderRound>
                                            {description}
                                            <InputRightFloat>x</InputRightFloat>
                                        </OrderRound>
                                    </StartInputContainer>
                                ))}
                            <StartInputContainer>
                                <StepNum>{desc.description.length + 1}</StepNum>
                                <OrderRound>
                                    <CustomInput
                                        placeholder="만드는 방법을 입력해주세요"
                                        onKeyDown={(e) => {
                                            console.log(e.key);
                                            if (e.key == "Enter") {
                                                onSetDesc({ description: [...desc.description, e.target.value] });
                                            }
                                        }}
                                    />
                                    {/* <InputRightFloat>x</InputRightFloat> */}
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
                                <CustomInput
                                    placeholder="#태그 입력(최대 10개)."
                                    onChange={(e) => {
                                        // if (e.target.value == " ") setTag([...tag, e.target.value]);
                                    }}
                                />
                            </InputContainer>
                            <RowGrid>{tag.length > 0 && tag.map((tag) => <Tag>{tag}</Tag>)}</RowGrid>
                        </SubOption>
                    </OptionContainer>
                </BlockWrapper>
                <RightButtonWrapper>
                    <button>레시피 등록</button>
                </RightButtonWrapper>
            </FormWrapper>
        </ContentWrapper>
    );
};

export default RecipeRegister;
