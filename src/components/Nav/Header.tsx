import { Box, Button, chakra, Flex, Heading, HStack, Avatar, Link, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, Route, useLocation } from "react-router-dom";
import { useRef, useContext } from "react";
import { GlobalContext } from "../Drink/context/GlobalState";
import SearchBar from "./SearchBar";
import logoImg from "../../assets/img/logoimg.png";

// Give the components chakra props
export const ShoppingCart = chakra(FaShoppingCart);

const Header = () => {
    const location = useLocation();
    const hamburgerRef = useRef<SVGSVGElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            as="header"
            direction="column"
            height={["120px", "fit-content"]}
            px={[3, null]}
            position="fixed"
            top={0}
            zIndex={10}
            w="100%"
            bg="white"
            boxShadow="base"
        >
            <Flex height="65px" px={[null, 2]} py={[7, 9]} justify={["space-between", null]}>
                <Flex align="center">
                    <HamburgerIcon
                        display={["inline-block", "none"]}
                        color="appBlue.500"
                        w="1.5rem"
                        h="1.5rem"
                        mr={4}
                        cursor="pointer"
                        ref={hamburgerRef}
                        onClick={onOpen}
                    />
                    <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }} mr={4}>
                        <Heading w="5rem">
                            <img src={logoImg} />
                        </Heading>
                    </Link>
                    <SearchBar display={["none", "block"]} />
                </Flex>
                <Flex justify="space-between" align="center">
                    <HStack spacing={[3, 5]}>
                        <Link
                            as={RouterLink}
                            to={location.pathname === "/login" ? "/register" : "/login"}
                            _hover={{ textDecoration: "none" }}
                        >
                            <Button
                                height={[8, 9]}
                                minW={[8, 9]}
                                fontSize={["sm", "md"]}
                                variant="outline"
                                borderColor="appBlue.400"
                                borderRadius="0.3rem"
                                color="appBlue.400"
                                _hover={{
                                    bg: "appBlue.400",
                                    color: "white",
                                }}
                                _active={{
                                    bg: "appBlue.500",
                                    color: "white",
                                }}
                            >
                                {location.pathname === "/login" ? "Sign Up" : "Sign In"}
                            </Button>
                        </Link>
                        <Box mr={location.pathname === "/login" || location.pathname === "/register" ? 2 : undefined}>
                            <Link as={RouterLink} to="/cart" _hover={{ textDecoration: "none" }}>
                                <ShoppingCart
                                    height={{ base: 25, smallTablet: 27, sm: 30 }}
                                    width={{ base: 25, smallTablet: 27, sm: 30 }}
                                    color="gray.400"
                                    cursor="pointer"
                                    _hover={{ color: "appBlue.300" }}
                                    _active={{ color: "appBlue.400" }}
                                />
                            </Link>
                        </Box>
                    </HStack>
                </Flex>
            </Flex>
            <SearchBar display={["block", "none"]} />
        </Flex>
    );
};

export default Header;
