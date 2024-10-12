import { useContext } from "react";
import { Tarea } from "./Tarea"
import { ContextTarea } from "../context/contextTarea";

export const Listado = () => {

    const { tareas } = useContext( ContextTarea);
    
    return (
        <div className="w-full border border-blue-300 flex flex-col gap-1">
            {
                tareas.length > 0  
                ? 
                   tareas.map( (item, index) => (
                    <Tarea key={index} item={item} />
                   ))
                : 
                <h1 className="text-blue-500 font-medium tracking-wider text-center">-- No hay tareas --</h1>
            }
        </div>
    );
}