import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

import DrinkReviewForm from "../components/Drink/DrinkReviewForm/DrinkReviewForm";
import sampleImg from "../assets/images/sampleImg.png";

ReactModal.setAppElement("#root");

function ProductModal(props: any) {
    const [heart, setHeart] = useState(0);

    const handleClickCancel = () => {
        props.onCancel();
    };

    const handleHeart = () => {
        if (heart == 0) setHeart(1);
        else if (heart == 1) setHeart(0);
    };

    return (
        <ModalStyleContainer>
            <ReactModal
                isOpen={props.isOpen}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 4,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0, 0.75)",
                    },
                    content: {
                        top: "28%",
                        left: "50%",
                        width: "75%",
                        height: "700px",
                        transform: "translate(-48%, -25%)",
                    },
                }}
            >
                <ModalContainer>
                    <div style={{ display: "flex" }}>
                        <FlexBoxLeft>
                            <DrinkTopContents>
                                <DrinkName>{props.name}</DrinkName>
                                <DrinkImg src={sampleImg} alt="sampleImg" />
                                <DrinkInfo>{props.description}</DrinkInfo>
                            </DrinkTopContents>
                            <DrinkContents>
                                <ContensColumn>
                                    <ContentsText>용량</ContentsText>
                                    <ContentsText>가격</ContentsText>
                                    <ContentsText>제조사</ContentsText>
                                    <ContentsText>칼로리</ContentsText>
                                    <ContentsText>분류</ContentsText>
                                </ContensColumn>
                                <ContensColumn>
                                    <ContentsData>{props.measure}ml</ContentsData>
                                    <ContentsData>{props.price}원</ContentsData>
                                    <ContentsData>{props.manufacture}</ContentsData>
                                    <ContentsData>{props.calorie}Kcal</ContentsData>
                                    <ContentsData>
                                        {props.large_category} | {props.medium_category} | {props.small_category}
                                    </ContentsData>
                                </ContensColumn>
                            </DrinkContents>
                            <DefaultText>*가격은 매장마다 상이할 수 있습니다.</DefaultText>
                        </FlexBoxLeft>
                        <FlexBoxRight>
                            <DrinkTopContents>
                                <DrinkName>마즐러 리뷰</DrinkName>
                                <div style={{ display: "flex", margin: "20px 0px" }}>
                                    <Rating
                                        name="read-only-stars"
                                        value={props.product.rating}
                                        precision={0.1}
                                        size="small"
                                        readOnly
                                    />
                                    <DrinkInfo>{props.product.rating}</DrinkInfo>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                    <div>
                                        <DrinkInfo style={{ fontSize: "12px", fontWeight: "bold", width: "100%" }}>
                                            닉네임
                                        </DrinkInfo>
                                        <DrinkInfo style={{ fontSize: "12px", width: "100%" }}>
                                            칼로리도 적고 맛있어요!
                                        </DrinkInfo>
                                    </div>
                                    {heart == 0 ? (
                                        <AiOutlineHeart size={20} color="#fb5c00" onClick={handleHeart} />
                                    ) : (
                                        <AiFillHeart size={20} color="#fb5c00" onClick={handleHeart} />
                                    )}
                                </div>
                            </DrinkTopContents>
                            <DrinkReviewForm />
                            <ReactionBadge></ReactionBadge>
                        </FlexBoxRight>
                        <div>
                            <button onClick={handleClickCancel} style={{ border: "none", background: "none" }}>
                                <IoCloseSharp />
                            </button>
                        </div>
                    </div>
                </ModalContainer>
            </ReactModal>
        </ModalStyleContainer>
    );
}

export default ProductModal;

const ModalStyleContainer = styled.div``;

const ModalContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;
`;

const FlexBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    height: 100%;
    padding-right: 120px;
    border-right: 1px solid black;
`;

const FlexBoxRight = styled.div`
    padding: 100px 35px;
`;

const DrinkName = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0px;
`;

const DrinkImg = styled.img`
    position: relative;
    left: 10%;
    width: 288px;
    height: 288px;
`;
const DrinkInfo = styled.p`
    width: 375px;
    font-size: 16px;
    color: #777777;
`;
const DrinkTopContents = styled.div`
    width: 291px;
`;

const DrinkContents = styled.div`
    display: flex;
    justify-content: space-around;
    width: 238px;
    height: 180px;
    margin-left: 50px;
    margin-top: 30px;
`;

const ContensColumn = styled.div``;

const ContentsText = styled.div`
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #a8a8a8;
`;

const ContentsData = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
`;

const DefaultText = styled.div`
    color: #fb5c00;
`;

const ReactionBadge = styled.div``;
