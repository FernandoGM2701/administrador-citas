import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario"
import Respuesta from "./components/Respuesta"

function App() {
  
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);
  
  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = (id) =>{
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
  }

  return (
    <Fragment>

      <h1>Administrador de paciente</h1>

      <div className="container">
          <div className="row">
              <div className = "one-half column">
                <Formulario
                crearCita = {crearCita}
                />
              </div>
              <div className = "one-half column">
                <h2>Administra tus citas</h2>
                {citas.map(cita => (
                  <Respuesta 
                    key  =  {cita.id}
                    cita =  {cita}
                    eliminarCita = {eliminarCita}
                  />
                ))}
              </div>
          </div>
      </div>

    </Fragment>


    
  );
}

export default App;
