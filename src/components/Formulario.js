import React, {Fragment, useState} from "react";


const Formulario = () => {


    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
    });


    //Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = () => {
        console.log("Escribiendo...");
    }

    return(
        <Fragment>

            <h1> Agregar Cita </h1>

            <form>
                <label> Nombre Mascota </label>
                <input
                    type = "text"
                    name = "mascota"    
                    className = "u-full-width"
                    placeholder = "Ingrese el nombre mascota"
                    onChange = {actualizarState}
                />

                <label> Nombre Dueño </label>
                <input
                    type = "text"
                    name = "dueño"    
                    className = "u-full-width"
                    placeholder = "Ingrese el nombre del dueño"
                />

                <label> Fecha </label>
                <input
                    type = "date"
                    name = "fecha"    
                    className = "u-full-width"
                />

                <label> Hora </label>
                <input
                    type = "time"
                    name = "hora"    
                    className = "u-full-width"
                />

                <label> Síntomas </label>
                <textarea
                    name = "sintomas"    
                    className = "u-full-width"
                ></textarea>

                <button
                    type= "submit"
                    className = "u-full-width button-primary"
                > Agregar Cita</button>
            </form>

        </Fragment>
        
    );
}

export default Formulario;