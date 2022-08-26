import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { Box, Badge, Avatar, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import NoFillHeart from "../../assets/images/notFillIcon.png";
import HeartFill from "../../assets/images/fillIcon.png";
import NoFillCollect from "../../assets/images/collect_fill.png";
import FillCollect from "../../assets/images/collect_outline.png";
// import { modaldata } from './ModalDummyData';

// import MyModal from "./MyModal";
// import useModals from "./useModals.js";

interface HotReviewState {
    comment_id: number;
    drink_name: string;
    comment: string;
    img: string;
    like_cnt: number;
}

type HotReviewProps = {
    product: HotReviewState;
};

ReactModal.setAppElement("#root");

const DrinkReviewCard = ({ product }: HotReviewProps) => {
    // const binaryData  =[];
    // const deUrl = window.btoa(props.img);
    // const imgUrl = `data:image/png;base64,${deUrl}`;
    return (
        <>
            <Box
                w="368px"
                h="102px"
                borderWidth="1px"
                borderRadius="lg"
                mb={3}
                _hover={{ boxShadow: "0 0 8px 0 #00000063", transition: "box-shadow 0.25s" }}
            >
                <Box display="flex" alignItems="center">
                    <img src={product.img} style={{ width: "78px", margin: "10px" }} />
                    <Box display="flex" alignItems="baseline" flexDirection="column" ml={2}>
                        <Box display="flex">
                            <AiFillHeart style={{ color: "red", margin: "2px" }} />
                            <Box mx="2" color="gray.600">
                                좋아요 {product.like_cnt}
                            </Box>
                        </Box>
                        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                            {product.drink_name}
                        </Box>
                        <CommentText>{product.comment}</CommentText>

                        {/* <Badge borderRadius="full" px="2" bg="#FB5C00" color="#ffffff">
                                {Array(1)
                                    .fill(" ")
                                    .map((_) => props.tag)}
                            </Badge> */}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DrinkReviewCard;

const CommentText = styled.div`
    font-size: 12px;
    color: #777777;
`;
