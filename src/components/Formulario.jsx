import { useState } from "react";
import Swal from "sweetalert2";

export const Formulario = ({handlerTareas}) => {

    const [nuevaTarea, setNuevaTarea ] = useState("");

    const handlerAddTarea = (e) => {
        e.preventDefault();
        if (!nuevaTarea.trim()) {
            Swal.fire({
                title: "Error",
                text: "¡Agrega una tarea en el formulario!",
                icon: "error"
              });
            return
        }
        handlerTareas(nuevaTarea)
        setNuevaTarea("");
    }

    return (
        <form action="" className="w-full flex gap-1 border p-2" onSubmit={ handlerAddTarea }>
            <input
                className="border p-2 w-[80%]" 
                type="text" 
                placeholder="Escribe un Tarea"
                value={nuevaTarea}
                onChange={ (e) => setNuevaTarea(e.target.value) }
            />

            <button
                type="submit"
                className="w-[20%] rounded-sm bg-sky-500 hover:bg-sky-800 transition-all text-white tracking-wide font-medium"
            >
                Agregar
            </button> 
        </form>
    );
}
