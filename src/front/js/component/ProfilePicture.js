import React, { useState } from "react";

export const ProfilePicture =()=> {
  const [imageUrl, setImageUrl] = useState("");

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
  
    data.append("file", file);
    data.append("upload_preset", "Presents_PT-56");
  
    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dw4ur9soy/image/upload", {
        method: "POST",
        body: data,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
  
      const responseData = await response.json();
      console.log(responseData);
  
      setImageUrl(responseData.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const deleteImagen =()=>{
    setImageUrl("")
  }
  
  return (
    <div className="App">

    <h1>SUBE TU IMAGEN</h1>

    <div>
      <input type="file" accept="image/*" onChange={changeUploadImage}/>
      {imageUrl && (
        <div>
          <img src={imageUrl}/>
          <button onClick={()=>deleteImagen()}>Eliminar imagen</button>
        </div>
      )}
    </div>

    </div>
  );
}
