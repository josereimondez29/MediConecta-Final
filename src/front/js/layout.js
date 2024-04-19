import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";

import { Single } from "./pages/single";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EditDoctor } from "./pages/EditDoctor"
import { Private } from "./pages/private";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PrivateDoctor from "./pages/PrivateDoctor";
import { AllDoctors } from "./component/AllDoctors";
import { IsLogin } from "./component/IsLogin";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Private />} path="/private" />
            <Route element={<Login/>} path="/login"/>
            <Route element={<Register />} path="/register" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<PrivateDoctor />} path="/doctor/:id"/>
            <Route element={<AllDoctors />} path="/alldoctors"/>
            <Route element={<IsLogin />} path="/log"/>
            <Route element={<EditDoctor />} path="/editDoctor"/>
            <Route element={<h1>Not found</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
