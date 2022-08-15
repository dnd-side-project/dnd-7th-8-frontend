import { Box, Image, Flex, Badge, Text, Button, LinkBox, LinkOverlay, useToast } from "@chakra-ui/react";
import Rating from "@material-ui/lab/Rating";
import { useContext } from "react";
import { BsFillHeartFill as FillHeart } from "react-icons/bs";
import { BsHeart as NoFillHeart } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { GlobalContext, ProductType } from "./context/GlobalState";
import gradientImg from "../../assets/img/grey-gradient.png";
import styled from "styled-components";

type Props = {
    product: ProductType;
    className?: string;
};

const ProductCard = ({ product }: Props) => {
    const { addToCart, toggleSaved } = useContext(GlobalContext);
    const toast = useToast();
    return (
        <Flex
            as={LinkBox}
            style={{ borderRadius: "10px" }}
            direction="column"
            className="product-card"
            h="430px"
            w="100%"
            maxW="320px"
            border={["1px solid", "none"]}
            borderColor={["gray.200", "transparent"]}
            _hover={{
                ".product-title": {
                    color: "appBlue.600",
                },
            }}
            transition="all 0.2s ease"
        >
            {/* <LinkOverlay as={RouterLink} to={{ pathname: `/products/${product.id}` }} className="product-title">
                <Flex direction="column" minH="84px" justify="flex-start">
                    <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
                        {product.title}
                    </Text>
                </Flex>
            </LinkOverlay> */}
            <Box>
                <Flex
                    style={{
                        borderRadius: "10px",
                        backgroundImage:
                            "linear-gradient(to top, rgba(232, 232, 232, 0.1) 80%, rgba(20, 20, 20, 0.3) 98%)",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                    }}
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "350px",
                            zIndex: "-1",
                            objectFit: "cover",
                            borderRadius: "10px 10px 0 0",
                        }}
                    />
                    <CoverContent>
                        <Text>{product.title}</Text>
                    </CoverContent>
                </Flex>
                <Flex mt={2} align="center" justify="space-between" flexWrap="wrap">
                    <Flex align="center">
                        <Rating name="read-only-stars" value={product.rating} precision={0.1} size="small" readOnly />
                        <Text ml={1} fontSize="sm">
                            {product.rating}
                        </Text>
                        <Button
                            leftIcon={product.isSaved ? <FillHeart /> : <NoFillHeart />}
                            colorScheme="appBlue"
                            variant={product.isSaved ? "fill" : "heaa"}
                            height={7}
                            minW={7}
                            fontSize="sm"
                            px={2}
                            py={3}
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
                        />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default ProductCard;

const CoverContent = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 5%;
`;
