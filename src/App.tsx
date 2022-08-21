import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
//페이지
import SignIn from "./pages/SignInPage";
import SignUpStart from "./pages/SignUpPage";
import SignUp from "./container/SignUpContainer/SignUpContainer";
import Drink from "./pages/DrinkPage";
import SearchResults from "./pages/SearchResults";
import "./App.css";
import { Provider } from "./components/Drink/context/GlobalState";

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Provider>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup/start" element={<SignUpStart />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/drink" element={<Drink />} />{" "}
                        <Route path="/search/:name" element={<SearchResults />} />
                    </Routes>
                </Provider>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
