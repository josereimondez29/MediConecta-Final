import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        actions.getinfoDoctor(params.id)
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, [params.id]);
    

    if (loading) {
        return <p>Cargando...</p>;
    }

    const doctor = store.doctors[params.id];

    if (!doctor) {
        return <p>No se pudo encontrar la información del médico.</p>;
    }
    return (
        <>
            Estoy aquí
            <div className="container" style={{ paddingTop: "10px" }}>
                <ul className="list-group">
                    <li key={params.id} className="list-group-item d-flex justify-content-between">
                        <div className='container card-button'>
                            <div className="cardInfo d-flex">
                                <Link to={"/"}>
                                    <img src="https://i.pinimg.com/236x/60/8a/7d/608a7d2de0cf6898c3869b116c4231be.jpg" className="card-img-top" alt="img contact" style={{ margin: "10px" }} />
                                </Link>
                                <div className="card-body">
                                    <div className="card-tittle d-flex">
                                        <h5>{doctor.name}</h5>
                                        <h5>{doctor.surname}</h5>
                                    </div>
                                    <div className="card-text d-flex" style={{ textAlign: "left" }}>
                                        <div className='info_contact'>
                                            <span style={{ fontSize: "medium "}}>{doctor.bio}</span><br/>
                                            <span style={{ fontSize: "small "}}>{doctor.speciality}</span><br/>
                                            <span style={{ fontSize: "x-small "}}>{doctor.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

PrivateDoctor.propTypes = {
    match: PropTypes.object
};

export default PrivateDoctor