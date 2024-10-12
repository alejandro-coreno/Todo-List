import { useEffect, useReducer } from "react";
import { tareasReducer } from "../reducers/tareasReducer";

const initialValues = JSON.parse(localStorage.getItem("tareas")) || [];

export const useTarea = () => {

    const [ tareas, dispatch ] = useReducer( tareasReducer, initialValues ); 

    const handlerTareas = ( nuevaTarea ) => {
        dispatch({ type: 'handlerTareas', payload: nuevaTarea })
    }

    const handlerDeleteTareas = (id) => {
        dispatch({ type: 'handlerDeleteTareas', payload: id })
    }

    const handlerUpdateTareas = (id, nuevoTexto) => {
        dispatch({ type: 'handlerUpdateTareas', payload: { id, nuevoTexto } })
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