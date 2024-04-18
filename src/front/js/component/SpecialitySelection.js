import React, { useState, useEffect } from 'react';

const SpecialitySelection = ({ handleSpecialitySelect }) => {
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + '/specialities') // Hace una solicitud GET a la ruta '/specialities'
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching specialities');
        }
        return response.json();
      })
      .then(data => {
        setSpecialities(data.result)
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching specialities:', error);
      });
  }, []);

  return (
    <div>
      <h2>Seleccione Especialidad</h2>
      <select onChange={(e) => handleSpecialitySelect(e.target.value)}>
        {specialities.map((Speciality) => (
          <option key={Speciality.id} value={Speciality.id}>{Speciality.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SpecialitySelection;



