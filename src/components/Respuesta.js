import React from "react";

const Respuesta = ({cita}) => {

    return (
           <div className="cita">
               <p>Mascota: <span> {cita.mascota} </span></p>
               <p>Dueño: <span> {cita.dueño} </span></p>
               <p>Fecha: <span> {cita.fecha} </span></p>
               <p>Hora: <span> {cita.hora} </span></p>
               <p>Síntomas: <span> {cita.sintomas} </span></p>
           </div>
    );
}

export default Respuesta;