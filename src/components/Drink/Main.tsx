import { Box, Flex, Tabs, TabList, Tab, Grid, useMediaQuery, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from "react";
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
        <Box as="main" mx={[0, 4]} h="100%" rounded="md">
            <Flex align="flex-end" justify="space-between" flexWrap="wrap">
                <Flex justify="space-between" align="center" flexWrap="wrap" w="100%">
                    <Heading fontFamily={"SUIT-Variable"} fontSize="28px" fontWeight="bold" ml={2} mb={6} mx={4}>
                        모든 음료(100)
                    </Heading>
                    <Tabs variant="unstyled" size="sm" mb={5}>
                        <TabList>
                            <Tab
                                _selected={{
                                    color: "black",
                                }}
                                fontSize={["xs", "sm"]}
                                color={"gray"}
                            >
                                <li style={{ color: "#FB5C00" }}></li>추천순
                            </Tab>
                            <Tab
                                _selected={{
                                    color: "black",
                                }}
                                fontSize={["xs", "sm"]}
                                color={"gray"}
                            >
                                <li style={{ color: "#FB5C00" }}></li>찜 많은 순
                            </Tab>
                        </TabList>
                    </Tabs>
                </Flex>
            </Flex>
            <Grid
                p={3}
                templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
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
