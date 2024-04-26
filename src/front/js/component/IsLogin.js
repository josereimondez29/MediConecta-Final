import React from "react";
import { Link } from "react-router-dom";


export const IsLogin =()=> {
    return(
        <>
        <div className="cointainer">
        Login correcto puedes acceder a:
            <Link to=  "/private">
                <button className="btn btn-info">Ir a zona privada</button>
            </Link>
            <Link to= "/editDoctor">
                <button className="btn btn-info">Modificar perfil</button>
            </Link>
        </div>
        </>
    )
}