import { useEffect, useReducer, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const initialValues = JSON.parse(localStorage.getItem("tareas")) || [];

export const useTarea = () => {
    const [tareas, setTareas] = useState(initialValues);
    // const [tareas, dispatch] = useReducer(reducer, initialValues)

    const handlerTareas = ( nuevaTarea ) => {
        setTareas([...tareas, {
        nuevaTarea, 
        id: uuidv4()
        }]);
    }

    const handlerDeleteTareas = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !==  id));
    }

    const handlerUpdateTareas = (id, nuevoTexto) => {
        setTareas(tareas.map(( tarea ) => {
        if (tarea.id == id) {
            return {
            ...tareas, nuevaTarea: nuevoTexto
            }
        }
        return tarea
        }));
    }

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    return {
        tareas,
        handlerTareas,
        handlerDeleteTareas,
        handlerUpdateTareas
    }
}