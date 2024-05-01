import React from "react";

export const LoadAtachment = () => {
    const { store, actions } = useContext(Context);
    const [profilePicture, setProfilePicture] = useState(null);
    const id = localStorage.getItem("id");

    useEffect(() => {
        // Llamar a la función para obtener la imagen de perfil
        getFolder(id);
    }, [id]);
    return (
        <>
            <div className="mb-3">
            <label htmlFor="formFile" class="form-label">Carga documentos tipo PDF</label>
            <input class="form-control" type="file" id="formFile"/>

            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}