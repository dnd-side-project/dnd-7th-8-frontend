import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
//페이지
import SignIn from "./pages/SignInPage";
import Drink from "./pages/DrinkPage";
import Product from "./pages/ProductPage";
import SearchResults from "./pages/SearchResults";
import "./App.css";
import { Provider } from "./components/Drink/context/GlobalState";

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Provider>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/drink" element={<Drink />} />{" "}
                        <Route path="/search/:name" element={<SearchResults />} />
                        <Route path="/products/:id" element={<Product />} />
                    </Routes>
                </Provider>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
