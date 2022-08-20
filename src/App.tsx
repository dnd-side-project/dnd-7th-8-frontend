import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import RecipeList from "./pages/RecipeList";
import styled from "styled-components";
import Header from "./components/Header";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeRegister from "./pages/RecipeRegister";
import Home from "./pages/Home";

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
                    <Route path="/recipe" element={<RecipeList />} />
                    <Route path="/recipe/*" element={<RecipeDetail />} />
                    <Route path="/recipe/register" element={<RecipeRegister />} />
                </Routes>
            </BrowserRouter>
        </Content>
    );
}

export default App;
