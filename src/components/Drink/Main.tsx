import { Box, Flex, Tabs, TabList, Tab, Grid, useMediaQuery } from "@chakra-ui/react";
import { searchTags } from "./mockDB/db";
import Badge from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "./LoadingProduct";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(() => import("./ProductCard"), {
    fallback: <LoadingProduct />,
});

// Give the components chakra props
const Main = () => {
    const { products, savedItemsCount } = useContext(GlobalContext);
    const [isLargerThan567] = useMediaQuery("(min-width: 567px)");

    return (
        <Box
            as="main"
            boxShadow="base"
            mx={[0, 4]}
            h="100%"
            rounded="md"
            border="1px solid"
            borderColor="gray.200"
            p={3}
        >
            <Flex align="flex-end" justify="space-between" flexWrap="wrap">
                <Flex justify="space-between" align="center" flexWrap="wrap" w="100%">
                    <Tabs variant="unstyled" size="sm" mb={5}>
                        <TabList bg="appBlue.50" rounded="md">
                            <Tab
                                _selected={{
                                    border: "1px solid",
                                    borderColor: "gray.200",
                                    color: "appBlue.400",
                                    bg: "white",
                                    rounded: "base",
                                    boxShadow: "base",
                                }}
                                fontSize={["xs", "sm"]}
                            >
                                추천순
                            </Tab>
                            <Tab
                                _selected={{
                                    border: "1px solid",
                                    borderColor: "gray.200",
                                    color: "appBlue.400",
                                    bg: "white",
                                    rounded: "base",
                                    boxShadow: "base",
                                }}
                                fontSize={["xs", "sm"]}
                            >
                                찜 많은 순
                            </Tab>
                        </TabList>
                    </Tabs>
                </Flex>
            </Flex>
            <Grid
                p={3}
                templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
                gap={3}
                placeItems="center"
                placeContent="center"
            >
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} className="loading-product" />
                ))}
            </Grid>
        </Box>
    );
};

export default Main;
