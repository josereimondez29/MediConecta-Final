import React, { useState } from "react";

export const ProfilePicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(process.env.BACKEND_URL + "/uploadprofilepicture", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await response.json();
      setImageUrl(responseData.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const deleteImage = () => {
    setImageUrl("");
  };
   


  return (
    <div className="App">
      <h1>SUBE TU IMAGEN</h1>
      <div>
        
        <input type="file" accept="image/*" onChange={changeUploadImage} />
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="uploaded image" />
            <button onClick={deleteImage}>Eliminar imagen</button>
          </div>
        )}
      </div>
    </div>
  );
};