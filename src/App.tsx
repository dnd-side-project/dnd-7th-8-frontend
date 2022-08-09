import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
