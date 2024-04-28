import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EditDoctor } from "./pages/EditDoctor";
import { SingleDoctor } from "./pages/SingleDoctor";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import MedicalAppointment from "./component/CitaMedica";
import PrivateDoctor from "./pages/PrivateDoctor";
import { AllDoctors } from "./component/AllDoctors";
import { AllPatients } from "./component/AllPatients";
import { IsLogin } from "./component/IsLogin";
import Jumbotron from "./component/Jumbotron";
// import { ChangeLog } from "./component/ChangeLog";
import { PrivatePatient } from "./pages/PrivatePatient";
import Prices from "./component/Prices";
import MedicinaGeneral from "./component/MedicinaGeneral";
import Dermatologia from "./component/Dermatologia";
import Pediatria from "./component/Pediatria";
import NotFound from "./component/NotFound"; 
import { Contact } from "./pages/Contact";
import Psicologia from "./component/Psicología";
import Fisioterapia from "./component/Fisioterapia";
import Nutricion from "./component/Nutricion";
import { RecoverPassword } from "./pages/RecoverPassword";


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

const LayoutContent = () => {
  const location = useLocation();
  const [page, setPage] = useState("");
  const id = localStorage.getItem("id")

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case "/":
        setPage("home");
        break;
      case "/login":
        setPage("login");
        break;
      case "/register":
        setPage("register");
        break;
        case `/privatedoctor/${id}`:
          setPage("private");
          break;
      case `/editDoctor/${id}`:
          setPage("edit");
          break;
      case "/privatepatient":
          setPage("private");
          break;
      case "/register/medical_appointment":
        setPage("appointment");
      break;
      case "/alldoctors":
        setPage("allDoctor");
      break;
      case "/prices":
        setPage("price");
      break;
      case "/log":
        setPage("info");
      break;
      case "/contact":
        setPage("contact");
      break;
      case "/recoverpassword":
        setPage("recoverpassword");
      break;
      case "/MedicinaGeneral":
        setPage("specialty");
      break;
      case "/Pediatria":
        setPage("specialty");
      break;
      case "/Psicologia":
        setPage("specialty");
      break;
      case "/Nutricion":
        setPage("specialty");
      break;
      case "/Fisioterapia":
        setPage("specialty");
      break;
      case "/Dermatologia":
        setPage("specialty");
      break;

      default:
        setPage(" ");
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Jumbotron page={page} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<MedicalAppointment />} path="/register/medical_appointment" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Single />} path="/single/:theid" />
        <Route element={<PrivateDoctor />} path="/privatedoctor/:id" />
        <Route element={<SingleDoctor />} path="/doctor/:id/details" />
        <Route element={<AllDoctors />} path="/alldoctors" />
        <Route element={<AllPatients />} path="/allpatients" />
        <Route element={<PrivatePatient />} path="/privatepatient" />
        <Route element={<Prices />} path="/prices" />
        <Route element={<IsLogin />} path="/log" />
        {/* <Route element={<ChangeLog/>} path="/changelog" /> */}
        <Route element={<EditDoctor />} path="/editDoctor/:id" />
        <Route element={<MedicinaGeneral />} path="/MedicinaGeneral" />
        <Route element={<Dermatologia />} path="/Dermatologia" />
        <Route element={<Pediatria />} path="/Pediatria" />
        <Route element={<Nutricion />} path="/Nutricion" />
        <Route element={<Psicologia />} path="/Psicologia" />
        <Route element={<Fisioterapia />} path="/Fisioterapia" />
        <Route element={<NotFound />} path="*" /> 
        <Route element={<Contact/>} path = "/contact"/>
        <Route element={<RecoverPassword/>} path = "/recoverpassword"/>
        
      </Routes>
      <Footer />
    </div>
  );
};

export default injectContext(Layout);