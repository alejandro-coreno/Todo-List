import { Tarea } from "./Tarea"


export const Listado = ({ handlerUpdateTareas, handlerDeleteTareas,  tareas = [] }) => {
    return (
        <div className="w-full border border-blue-300 flex flex-col gap-1">
            {
                tareas.length > 0  
                ? 
                   tareas.map( (item, index) => (
                    <Tarea key={index} 
                        item={item} 
                        handlerDeleteTareas={handlerDeleteTareas} 
                        handleUpdateTareas={handlerUpdateTareas} 
                    />
                   ))
                : 
                <h1 className="text-blue-500 font-medium tracking-wider text-center">No hay tareas</h1>
            }
        </div>
    )
}