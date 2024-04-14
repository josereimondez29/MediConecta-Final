import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

const LoginPacient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const { store, actions } = useContext(Context);

 
  const handleSubmit = (e) => {
    e.preventDefault()
    actions.loginPacient(email, password);
  };

  return (
   
    <div className="container mt-5">
    {store.authentication === true ? <Navigate to = "/"/> :
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
             
            <Link to={"/"}>
                <button type="btn" className='btn btn-secondary'>Back home</button>
            </Link>
          </form>
        {store.messageError && <div className="mt-3 text-danger">{store.messageError}</div>}
        </div>
      </div>}
     {/* PONER LINK QUE VAYA A LA PAGINA DE REGISTRO CON EL TEXTO  "SI NO ESTAS REGISTRADO ACCEDE AQUI" */}
    </div>
  );
};

export default LoginPacient;
