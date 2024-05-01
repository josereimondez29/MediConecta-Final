import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardAppointment } from "./CardAppointment";

export const ListAppointment = () => {
        const { store, actions } = useContext(Context);
    

        const displayAppointment = store.appointment ;
    
        return (
            <>  
                ({displayAppointment.map(appointment => (
                    <CardAppointment 
                        pacient_id={appointment.pacient_id}
                        appointment_date={appointment.appointment_date}
                        room_url={appointment.room_url}
                    />
                    ))}
                ) : (
                    <p>No hay citas pendientes.</p>)
        
            </>
        );
    };   