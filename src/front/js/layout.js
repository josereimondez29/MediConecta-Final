import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EditDoctor } from "./pages/EditDoctor";
import { Private } from "./pages/private";
import { SingleDoctor } from "./pages/SingleDoctor";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PrivateDoctor from "./pages/PrivateDoctor";
import { AllDoctors } from "./component/AllDoctors";
import { IsLogin } from "./component/IsLogin";
import Jumbotron from "./component/Jumbotron";

const LayoutContent = () => {
    const location = useLocation();
    const [page, setPage] = useState("");

    useEffect(() => {
        const currentPath = location.pathname;

        switch (currentPath) {
            case "/":
                setPage("home");
                break;
            case "/login":
                setPage("login");
                break;
            case "/contact":
                setPage("contact");
                break;
            default:
                setPage("");
                break;
        }
    }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <Jumbotron page={page} />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Private />} path="/private" />
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" />
                <Route element={<Single />} path="/single/:theid" />
                <Route element={<PrivateDoctor />} path="/doctor/:id" />
                <Route element={<AllDoctors />} path="/alldoctors" />
                <Route element={<IsLogin />} path="/log" />
                <Route element={<EditDoctor />} path="/editDoctor/:id" />
                <Route element={<SingleDoctor />} path="/doctor/:id/details" />
                <Route element={<h1>Not found</h1>} />
            </Routes>
            <Footer />
        </div>
    );
};

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <LayoutContent />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);