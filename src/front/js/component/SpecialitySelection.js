import React, { useState, useEffect } from 'react';

const SpecialitySelection = ({ handleSpecialitySelect }) => {
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(""); // Estado para almacenar la especialidad seleccionada

  useEffect(() => {
    fetch(process.env.BACKEND_URL + '/specialities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching specialities');
        }
        return response.json();
      })
      .then(data => {
        setSpecialities(data.result);
      })
      .catch(error => {
        console.error('Error fetching specialities:', error);
      });
  }, []);

  const handleChange = (e) => {
    const selectedSpecialityId = e.target.value;
    console.log('Selected speciality id:', selectedSpecialityId); // Log del valor seleccionado
    setSelectedSpeciality(selectedSpecialityId); // Actualizar el estado con el ID de la especialidad seleccionada
    handleSpecialitySelect(selectedSpecialityId);
  };

  return (
    <div>
      <h2>Seleccione Especialidad</h2>
      <select value={selectedSpeciality} onChange={handleChange}>
        <option value="">Seleccionar Especialidad</option>
        {specialities.map((speciality) => (
          <option key={speciality.id} value={speciality.id}>{speciality.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SpecialitySelection;






