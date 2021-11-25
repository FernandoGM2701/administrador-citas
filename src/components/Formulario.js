import React, {Fragment, useState} from "react";
import uuid from "uuid/dist/v4"; 


const Formulario = ({crearCita}) => {


    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
    });

    const [error, actualizarError] = useState(false);


    //Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }


    //Extraer valores

    const {mascota, dueño, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita

    const submitCita = (e) => {
        e.preventDefault();

        //Validar
        if(mascota.trim() === "" || dueño.trim() === "" || fecha.trim() === "" || hora.trim() === ""
        || sintomas.trim() === ""){
            actualizarError(true);
            return; 
        }

        //Eliminar el mensaje previo
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();
        
        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: "",
            dueño: "",
            fecha: "",
            hora: "",
            sintomas: "",
        })
    }

    return(
        <Fragment>

            <h1> Agregar Cita </h1>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}

            <form
                onSubmit = {submitCita}
            >
                <label> Nombre Mascota </label>
                <input
                    type = "text"
                    name = "mascota"    
                    className = "u-full-width"
                    placeholder = "Ingrese el nombre mascota"
                    onChange = {actualizarState}
                    value = {mascota}
                />

                <label> Nombre Dueño </label>
                <input
                    type = "text"
                    name = "dueño"    
                    className = "u-full-width"
                    placeholder = "Ingrese el nombre del dueño"
                    onChange = {actualizarState}
                    value = {dueño}
                />

                <label> Fecha </label>
                <input
                    type = "date"
                    name = "fecha"    
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {fecha}
                />

                <label> Hora </label>
                <input
                    type = "time"
                    name = "hora"    
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {hora}
                />

                <label> Síntomas </label>
                <textarea
                    name = "sintomas"    
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {sintomas}
                ></textarea>

                <button
                    type= "submit"
                    className = "u-full-width button-primary"
                    onChange = {actualizarState}
                > Agregar Cita</button>
            </form>

        </Fragment>
        
    );
}

export default Formulario;