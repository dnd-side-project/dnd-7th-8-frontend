import React, { useEffect, useState } from "react";
import { Box, Flex, Tabs, TabList, Grid, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SliderSection from "../components/Home/SliderSection";
import homeBanner1 from "../assets/images/home_banner_sample.png";
import homeBanner2 from "../assets/images/home_banner_sample1.png";
import homeBanner3 from "../assets/images/home_banner_sample2.png";
import Posts from "../components/Home/Posts";
import axios from "axios";
import Carousel from "../components/Home/Carousel/Carousel";

const image = [
    { recommandImgUrl: `${homeBanner1}` },
    { recommandImgUrl: `${homeBanner2}` },
    { recommandImgUrl: `${homeBanner3}` },
];

interface ImageState {
    recommandImgUrl: string;
}

interface PopularState {
    recipe_id: number;
    nickname?: string | null;
    recipe_name: string;
    img: string;
    price: number;
    tag: string;
    like_cnt: number;
}

const HomeContainer = () => {
    const [recommand, setRecommand] = useState<ImageState[]>(image);
    const [postData, setPostData] = useState<PopularState[]>([]);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        console.log(token);
        // 여기서 열어준다
        axios({
            method: "GET",
            url: `http://mazle.ml/home/hot-recipe/`,
        }).then((response) => {
            console.log(response);
            setPostData(response.data.data);
        });
    }, []);
    //테스트용
    // useEffect(() => {

    //     setRecommand(recommand);
    // }, []);
    return (
        <div style={{ width: "1240px" }}>
            <HomeMainContainer>
                <HomeMainTitle>오늘도 맛있는 한 모금, 마즐!</HomeMainTitle>
                <HomeMainSubTitle>마즐에서 마시는 즐거움을 느껴보세요 :)</HomeMainSubTitle>
            </HomeMainContainer>
            <SliderContainer>
                <SliderSection recommandItems={recommand} />
            </SliderContainer>
            <PopularRecipe>
                <Box>
                    <Heading mb={5} style={{ fontSize: "28px" }}>
                        지금 뜨는 인기 조합 레시피
                    </Heading>
                    <Grid
                        p={3}
                        templateColumns="repeat(auto-fit, minmax(270px, 1fr))"
                        placeItems="center"
                        placeContent="center"
                    >
                        {postData.map((item) => {
                            return (
                                <Posts
                                    nickname={item.nickname}
                                    recipe_id={item.recipe_id}
                                    recipe_name={item.recipe_name}
                                    like_cnt={item.like_cnt}
                                    price={item.price}
                                    tag={item.tag}
                                    img={item.img}
                                />
                            );
                        })}
                    </Grid>
                    <Link to="/recipe">
                        <Button
                            colorScheme="gray"
                            variant="outline"
                            w="346px"
                            h="52px"
                            borderRadius="100px"
                            fontSize="12px"
                            mx="450px"
                        >
                            더 많은 조합 레시피
                        </Button>
                    </Link>
                </Box>
            </PopularRecipe>
            <RecommandRecipe>
                <Box>
                    <Heading mb={5} style={{ fontSize: "28px" }}>
                        오늘은 이 음료 어떠세요?
                    </Heading>
                    <Carousel />
                </Box>
            </RecommandRecipe>
        </div>
    );
};

export default HomeContainer;

const HomeMainContainer = styled.div`
    font-family: "SUIT-Variable";
    padding: 2% 0% 4% 17%;
    position: absolute;
    width: 100%;
    height: 160px;
    left: 0px;
    top: 70px;
    background-color: #fafaf6;
`;

const HomeMainTitle = styled.div`
    font-size: 2rem;
    font-weight: 900;
`;

const HomeMainSubTitle = styled.div`
    margin-top: 10px;
    font-size: 1.1rem;
`;

const SliderContainer = styled.div`
    position: absolute;
    left: 0px;
    top: 224px;
`;

const PopularRecipe = styled.div`
    width: 1240px;
    height: 860px;
    position: absolute;
    top: 600px;
`;

const RecommandRecipe = styled.div`
    width: 1240px;
    height: 860px;
    position: absolute;
    top: 1150px;
`;
