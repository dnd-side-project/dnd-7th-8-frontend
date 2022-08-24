import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import Modal from './Modal';
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
ReactModal.setAppElement("#root");

export default function Posts(props: any) {
    const [isOpen, setOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [postImgUrl, setPostImgUrl] = useState("");
    const [postContent, setPostContent] = useState("");
    const sessionStorage = window.sessionStorage;

    const handleModalSubmit = () => {
        // 모달1 비지니스 로직
        setOpen(false);
    };

    // const binaryData  =[];
    const deUrl = window.btoa(props.img);
    const imgUrl = `data:image/png;base64,${deUrl}`;
    // binaryData.push(imgUrl);
    // const handleModalCancel = () => setOpen(false);
    // const blobUrl = window.URL.createObjectURL(new Blob(imgUrl, { type: "image/png" }));
    // console.log(blobUrl);

    const imageVariants = {
        beforeHover: {},
    };

    const textVariants = {
        beforeHover: { display: "none" },
        onHover: { display: "flex" },
    };

    return (
        <>
            <Box maxW="282px" h="338px" borderWidth="1px" borderRadius="lg" overflow="hidden" mx="24px" mb={3}>
                <ImageWrap>
                    <WrapBox initial="beforeHover" whileHover="onHover">
                        <TextBox variants={textVariants}>
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" w="24px" h="24px" mr="5px" />
                            {props.nickname}
                        </TextBox>

                        <ImageBox variants={imageVariants} src={imgUrl} />
                    </WrapBox>
                </ImageWrap>
                <Button
                    leftIcon={isToggle ? <img src={HeartFill} /> : <img src={NoFillHeart} />}
                    variant={isToggle ? "fill" : "heaa"}
                    height={7}
                    minW={7}
                    fontSize="sm"
                    onClick={() => {
                        isToggle ? setIsToggle(false) : setIsToggle(true);
                        isToggle
                            ? sessionStorage.setItem("likeItem", props.recipe_id)
                            : sessionStorage.removeItem("likeItem");
                    }}
                    style={{ position: "absolute", top: "34%" }}
                />
                <Button
                    leftIcon={false ? <img src={NoFillCollect} /> : <img src={FillCollect} />}
                    variant={false ? "fill" : "heaa"}
                    height={7}
                    minW={7}
                    fontSize="sm"
                    style={{ position: "absolute", top: "28%" }}
                />
                <Box p="4">
                    <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                        {props.recipe_name}
                    </Box>
                    <Box display="flex" mt="1" alignItems="center">
                        <Box display="flex" alignItems="baseline">
                            <AiFillHeart style={{ color: "red", margin: "2px" }} />
                            <Box as="span" mx="2" color="gray.600" fontSize="sm">
                                좋아요 {props.like_cnt}
                            </Box>
                            <Badge borderRadius="full" px="2" bg="#FB5C00" color="#ffffff">
                                {Array(1)
                                    .fill(" ")
                                    .map((_) => props.tag)}
                            </Badge>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const ImageWrap = styled.div`
    &:hover {
        background-image: linear-gradient(to top, rgba(232, 232, 232, 0.1) 70%, rgba(20, 20, 20, 0.5) 98%);
        background-size: "cover";
    }
`;

const WrapBox = styled(motion.div)`
    width: 282px;
    height: 262px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    position: relative;
`;

const ImageBox = styled(motion.img)`
    width: 282px;
    height: 262px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -4;
    transition: transform 0.3s;
`;

const TextBox = styled(motion.div)`
    color: #fff;
    padding: 1rem;

    overflow: hidden;
    position: relative;
    top: -80%;
`;
