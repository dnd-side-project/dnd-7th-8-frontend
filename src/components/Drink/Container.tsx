import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { ReactNode } from "react";
import Banner from "./Banner";
import Header from "../Nav/Header";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Banner />
            <Flex direction="column" minH="100vh" style={{ padding: "0% 10%", fontFamily: "SUIT-Variable" }}>
                <Flex flex={1} minH="100%">
                    <Box display={["none", "block"]} minH="100%" w="220px" py={12} color="gray.600">
                        <Sidebar />
                    </Box>
                    <Box flex={1} py={[0, 8]}>
                        {children}
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default Container;
