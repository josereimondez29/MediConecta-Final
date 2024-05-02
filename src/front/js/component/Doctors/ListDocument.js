import React, { useState } from "react";
import LoadAttachment from "../AttachmentFile/LoadAttachment";

const ListDocument = () => {
    const [selectedPatientId, setSelectedPatientId] = useState(""); // Estado para almacenar el ID del paciente seleccionado

    const handlePatientChange = (e) => {
        setSelectedPatientId(e.target.value);
    };

    return (
        <>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example"
                id="inputspatientID"
                name="patientID"
                value={selectedPatientId}
                onChange={handlePatientChange}
            >
                <option value="">Elige una opción</option> {/* Opción por defecto */}
                {/* Opciones de pacientes */}
                <option value="1">Paciente 1</option>
                <option value="2">Paciente 2</option>
                {/* Agrega más opciones según tus necesidades */}
            </select>

            {/* Renderizar el componente LoadAttachment con el userId del paciente seleccionado */}
            {selectedPatientId && <LoadAttachment userId={selectedPatientId} key={selectedPatientId} />}
        </>
    );
};

export default ListDocument;