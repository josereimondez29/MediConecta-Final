import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

const LoadAttachment = () => {
    const [files, setFiles] = useState([]);
    const { actions } = useContext(Context);
    const userId = localStorage.getItem("id");
    
    useEffect(() => {
        const fetchAttachmentFiles = async () => {
            try {
                const id = localStorage.getItem("id");
                const response = await fetch(process.env.BACKEND_URL + `/attachmentfile/patient/${id}`);
                if (!response.ok) {
                    throw new Error("Error fetching attachment files");
                }
                const attachmentFiles = await response.json();
                setFiles(attachmentFiles);
                console.log("Datos recibidos del backend:", attachmentFiles);
            } catch (error) {
                console.error("Error fetching attachment files:", error);
                // Aquí podrías mostrar un mensaje de error al usuario
            }
        };

        fetchAttachmentFiles();
    }, []);

    const deleteFolder = async (attachment_id) => {
        try {
            const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este PDF?");
            if (confirmDelete) {
                const response = await fetch(`${process.env.BACKEND_URL}/deletefile/patient/${userId}/${attachment_id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Error al eliminar el documento del perfil');
                }
                // Actualizar el estado files después de eliminar el archivo
                setFiles(files.filter(file => file.id !== attachment_id));
                // No es necesario recargar la página aquí
            }
        } catch (error) {
            console.error("Error al eliminar el PDF:", error);
            setConfirmationMessage("Error al eliminar el PDF. Inténtalo de nuevo.");
        }
    };
    
    return (
        <>
            {/* Mostrar la lista de documentos cargados */}
            {files.length > 0 ? (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <a className="link-document" href={file.url_file} target="_blank" rel="noopener noreferrer">{file.description}</a>
                            {/* Pasar el attachmentId al llamar a la función deleteFolder */}
                            <button onClick={() => deleteFolder(file.id)}>Eliminar fichero</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se han cargado archivos aún.</p>
            )}
        </>
    );
};

export default LoadAttachment;