import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isWithinInterval } from "date-fns";

const AvailabilityCalendar = ({ handleAppointment, doctorAvailability, bookedAppointments }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const transformAvailabilityToExcludeTimes = () => {
    if (!doctorAvailability) {
      return [];
    }
    
    return doctorAvailability.flatMap(availability => {
      const startTime = new Date(`1970-01-01T${availability.start_time}`);
      const endTime = new Date(`1970-01-01T${availability.end_time}`);
      return { start: startTime, end: endTime };
    });
  };

  const filterUnavailableTimes = (time) => {
    // Filtrar horas fuera del horario de disponibilidad o ya reservadas
    const isAvailable = isTimeAvailable(time);
    return isAvailable;
  };

  const isTimeAvailable = (time) => {
    if (!bookedAppointments) {
      return true; // Si no hay citas agendadas, todas las horas están disponibles
    }

    // Verificar si la hora está dentro del horario de disponibilidad y no está ya reservada
    const appointmentTime = time.getTime();
    return bookedAppointments.every(appointment => {
      const appointmentDateTime = new Date(appointment.appointment_date);
      return appointmentTime !== appointmentDateTime.getTime();
    });
  };

  useEffect(() => {
    console.log('Disponibilidad del médico:', doctorAvailability);
  }, [doctorAvailability]); // Ejecutar cada vez que cambie la disponibilidad del médico

  const handleDateChange = date => {
    // Ajustar la zona horaria a la del servidor (GMT+1 en este caso)
    const adjustedDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)); 
    setSelectedDate(adjustedDate);
    handleAppointment(adjustedDate);
  };

  return (
    <div>
      <h2>Seleccione una fecha y hora disponibles</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm" // Utilizar el formato de 24 horas
        timeIntervals={15}
        dateFormat="MMMM d, yyyy HH:mm" // Agregar HH:mm para incluir horas en formato de 24 horas
        minDate={new Date()}
        placeholderText="Seleccione una fecha y hora"
        excludeTimes={transformAvailabilityToExcludeTimes()}
        filterTime={filterUnavailableTimes}
        filterDate={date => {
          // Filtrar días ocupados
          return doctorAvailability ? !doctorAvailability.some(({ start, end }) => isWithinInterval(date, { start, end })) : true;
        }}
      />
    </div>
  );
};

export default AvailabilityCalendar;






















