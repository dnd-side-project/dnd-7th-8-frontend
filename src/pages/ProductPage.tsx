import { useParams } from "react-router-dom";
import {
    Box,
    Flex,
    Stack,
    StackDivider,
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
    Tag,
    Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { useContext } from "react";
import { GlobalContext } from "../components/Drink/context/GlobalState";
import Container from "../components/Drink/Container";

interface ParamsTypes {
    [id: string]: string;
}

const Product = () => {
    const { products, addToCart } = useContext(GlobalContext);
    // Get the url parameter (/:id) value
    const { id } = useParams<ParamsTypes>();
    const product = products.find((product) => product.id === id);
    return (
        <Container>
            <Box p={3}>
                <Breadcrumb
                    fontSize="sm"
                    spacing="8px"
                    mb={6}
                    color="gray.500"
                    separator={<ChevronRightIcon color="gray.500" />}
                ></Breadcrumb>
                <Box maxW="640px">
                    <Stack
                        direction={{ base: "column", smallTablet: "row" }}
                        spacing={4}
                        mb={8}
                        divider={<StackDivider borderColor="blackAlpha.300" borderWidth="2px" />}
                    >
                        <Image m="auto" src={product?.imageUrl} alt={product?.imageAlt} boxSize="220px" />
                        <Box>
                            <Flex align="center" mb={3}>
                                <Rating
                                    name="read-only-stars"
                                    value={product?.rating}
                                    precision={0.1}
                                    size="small"
                                    readOnly
                                />
                                <Text ml={1} fontSize="sm">
                                    ({product?.reviewCount} {product?.reviewCount === 1 ? "Rating" : "Ratings"})
                                </Text>
                            </Flex>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default Product;
