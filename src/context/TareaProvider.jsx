import { ContextTarea } from "./contextTarea";
import { useTarea } from "../hooks/useTarea";

export const TareaProvider = ({ children }) => {

    const { tareas, handlerTareas, handlerUpdateTareas, handlerDeleteTareas } = useTarea();

    return (
        <ContextTarea.Provider value={{
            tareas,
            handlerTareas,
            handlerUpdateTareas,
            handlerDeleteTareas
        }}>
            { children }
        </ContextTarea.Provider>
    );
}