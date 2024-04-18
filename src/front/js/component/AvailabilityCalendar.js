import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AvailabilityCalendar = ({ handleAppointment }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    handleAppointment(date); // Pasar la fecha seleccionada al componente padre
  };

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
