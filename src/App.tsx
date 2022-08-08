import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
