import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import RecipeList from "./pages/RecipeList";
import styled from "styled-components";
import Header from "./components/Header";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeRegister from "./pages/RecipeRegister";
import Home from "./pages/Home";
import SignIn from "./pages/SignInPage";
import SignUpStart from "./pages/SignUpPage";
import SignUp from "./container/SignUpContainer";
import Drink from "./pages/DrinkPage";
import SearchResults from "./pages/SearchResults";

const Content = styled.div`
    width: 1240px;
    margin-bottom: 50px;
`;

function App() {
    return (
        <Content>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup/start" element={<SignUpStart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/recipe" element={<RecipeList />} />
                    <Route path="/recipe/*" element={<RecipeDetail />} />
                    <Route path="/recipe/register" element={<RecipeRegister />} />
                    <Route path="/drink" element={<Drink />} />{" "}
                    <Route path="/search/:name" element={<SearchResults />} />
                </Routes>
            </BrowserRouter>
        </Content>
    );
}

export default App;
