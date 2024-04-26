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
import { Private } from "./pages/private";
import MedicalAppointment from "./component/CitaMedica";
import VideoConf from "./component/VideoConf/VideoConf.jsx"
import PrivateDoctor from "./pages/PrivateDoctor";
import { PrivateMedico } from "./pages/PrivateMedico";
import { AllDoctors } from "./component/AllDoctors";
import { AllPatients } from "./component/AllPatients"
import { IsLogin } from "./component/IsLogin";
import Jumbotron from "./component/Jumbotron";
import { ChangeLog } from "./component/ChangeLog";
import { PrivatePatient } from "./pages/PrivatePatient";
import Prices from "./component/Prices";
import MedicinaGeneral from "./component/MedicinaGeneral";
import Dermatologia from "./component/Dermatologia";
import Pediatria from "./component/Pediatria";


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
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Private />} path="/private" />
            <Route element={<MedicalAppointment />} path="/register/medical_appointment" />
            <Route element={<Login />} path="/login" />
            <Route element={<PrivateMedico />} path="/PrivateMedico" />
            <Route element={<Register />} path="/register" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<PrivateDoctor />} path="/doctor/:id" />
            <Route element={<AllDoctors />} path="/alldoctors" />
            <Route element={<AllPatients />} path="/allpatients" />
            <Route element={<PrivatePatient />} path="/privatepatient" />
            <Route element={<Prices />} path="/prices" />
            <Route element={<IsLogin />} path="/log" />
            <Route element={<EditDoctor />} path="/editDoctor" />
            <Route element={<MedicinaGeneral />} path="/MedicinaGeneral" />
            <Route element={<Dermatologia />} path="/Dermatologia" />
            <Route element={<Pediatria />} path="/Pediatria" />
            <Route element={<h1>Not found</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
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