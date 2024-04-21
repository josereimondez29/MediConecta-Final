import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AvailabilityCalendar = ({ handleAppointment, doctorId }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    handleAppointment(date); // Pasar la fecha seleccionada al componente padre
  };

  useEffect(() => {
    // Aquí puedes implementar la lógica para obtener la disponibilidad del doctor
    // utilizando el doctorId y actualizando el estado según corresponda
    // Esto podría involucrar una solicitud a una ruta en tu API que maneje la disponibilidad del doctor
    // Por ahora, supondrémos que la disponibilidad del doctor se obtiene correctamente
  }, [doctorId]);

  return (
    <div>
      <h2>Seleccione una fecha y hora disponibles</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()} // Evitar fechas pasadas
        placeholderText="Seleccione una fecha y hora"
      />
    </div>
  );
};

export default AvailabilityCalendar;


