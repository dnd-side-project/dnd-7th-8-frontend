import { Box, Image, Flex, Link, Text, Button, LinkBox, LinkOverlay, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { GlobalContext, ProductType } from "./context/GlobalState";
import NoFillHeart from "../../assets/img/notFillIcon.png";
import BsFillHeartFill from "../../assets/img/fillIcon.png";
import styled from "styled-components";
import ProductModal from "../../pages/ProductPage";
import { modalDummy } from "../Drink/mockDB/ModalDummyData";
import axios from "axios";

type Props = {
    product: ProductType;
    className?: string;
};

type ModalDataType = {
    drink_name: string;
    img: string;
    description: string | null;
    measure: number;
    price: number;
    manufacture: string;
    calorie: number;
    large_category: string | null;
    medium_category: string | null;
    small_category: string | null;
    alcohol: number;
    caffeine: number;
    tag: string | null;
    like_cnt: number;
};

const ProductCard = ({ product }: Props) => {
    const { addToCart, toggleSaved } = useContext(GlobalContext);
    const toast = useToast();
    const [isOpen, setOpen] = useState(false);
    const [dummyData, setDummyData] = useState<ModalDataType>(modalDummy);

    const handleClick = async () => {
        axios.defaults.withCredentials = true;
        let token =
            "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE5MmEyODBhLWQ5ZGUtNDU4ZS04NGNlLTdiODBiZDFiODhkYyIsImV4cCI6MTY2MTA4MzQ2OX0.2uJr0DZmc09ucKzutV22kCirvoDxhNUF9JFomA4bQWQ";
        // await axios.get(`http://mazle.ml/drink/get/48`).then((response) => {
        //     console.log(response);
        // });
        console.log(token);
        await axios
            .get(`http://mazle.ml/drink/get/48`, {
                headers: { Authorization: token },
                params: { i_drink_id: 48 },
            })
            .then((response) => {
                console.log(response);
            });
        // setDummyData(modalDummy);
        // console.log(dummyData);
        // 여기서 열어준다
    };

    const handleModalSubmit = () => {
        // 모달1 비지니스 로직
        setOpen(false);
    };
    const handleModalCancel = () => setOpen(false);
    return (
        <>
            <Flex
                boxShadow="xl"
                mb={8}
                as={LinkBox}
                style={{ borderRadius: "10px" }}
                className="product-card"
                h="350px"
                maxW="240px"
                transition="all 0.2s ease"
            >
                <Box>
                    <Flex
                        style={{
                            borderRadius: "10px",
                            backgroundImage:
                                "linear-gradient(to top, rgba(232, 232, 232, 0.1) 80%, rgba(20, 20, 20, 0.3) 98%)",
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                        }}
                        onClick={handleClick}
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.imageAlt}
                            style={{
                                position: "relative",
                                height: "300px",
                                zIndex: "-2",
                                objectFit: "cover",
                                borderRadius: "10px 10px 0 0",
                            }}
                        />
                        <CoverContent>
                            <Text style={{ fontSize: "18px", color: "white" }}>{product.title}</Text>
                        </CoverContent>
                    </Flex>
                    <Button
                        leftIcon={product.isSaved ? <img src={BsFillHeartFill} /> : <img src={NoFillHeart} />}
                        variant={product.isSaved ? "fill" : "heaa"}
                        height={7}
                        minW={7}
                        fontSize="sm"
                        onClick={() => {
                            toast({
                                title: product.isSaved
                                    ? "Product successfully removed from your saved items"
                                    : "Product successfully added to your saved items",
                                status: "success",
                                duration: 1500,
                                isClosable: true,
                            });
                            toggleSaved(product.id);
                        }}
                        style={{ position: "absolute", left: "80%", bottom: "20%" }}
                    />
                    <Flex mt={2} align="center" justify="space-between" flexWrap="wrap">
                        <Flex align="center" pl={4} pt={1}>
                            {/* <Rating name="read-only-stars" precision={0.1} size="small" readOnly /> */}
                            <BsFillStarFill style={{ width: "15px", color: "#FB5C00" }} />
                            <Text ml={1} fontSize="md" style={{ fontWeight: "900", color: "#FB5C00" }}>
                                {product.rating}
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
                <ProductModal
                    isOpen={isOpen}
                    onSubmit={handleModalSubmit}
                    onCancel={handleModalCancel}
                    name={dummyData.drink_name}
                    description={dummyData.description}
                    calorie={dummyData.calorie}
                    manufacture={dummyData.manufacture}
                    price={dummyData.price}
                    large_category={dummyData.large_category}
                    medium_category={dummyData.medium_category}
                    small_category={dummyData.small_category}
                    img={dummyData.img}
                    alcohol={dummyData.alcohol}
                    measure={dummyData.measure}
                    caffeine={dummyData.caffeine}
                    like_cnt={dummyData.like_cnt}
                    product={product}
                />
            </Flex>
        </>
    );
};

export default ProductCard;

const CoverContent = styled.div`
    padding: 10px;
    width: 160%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 0;
    top: 0.5rem;
    left: 5%;
`;
