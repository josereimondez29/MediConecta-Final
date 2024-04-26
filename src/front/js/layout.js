import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EditDoctor } from "./pages/EditDoctor"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
// import { Private } from "./pages/private";
import MedicalAppointment from "./component/CitaMedica";
import VideoConf from "./component/VideoConf/VideoConf.jsx"
import PrivateDoctor from "./pages/PrivateDoctor";
import { PrivateMedico } from "./pages/PrivateMedico";
import { AllDoctors } from "./component/AllDoctors";
import { AllPatients } from "./component/AllPatients"
import { IsLogin } from "./component/IsLogin";
import { PrivatePatient } from "./pages/PrivatePatient";
import Prices from "./component/Prices";
import MedicinaGeneral from "./component/MedicinaGeneral";



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
            {/* <Route element={<Private />} path="/private" /> */}
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
            <Route element={<h1>Not found</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
