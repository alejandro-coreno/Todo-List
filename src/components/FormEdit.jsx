import { useContext, useState } from "react"
import { ContextTarea } from "../context/contextTarea";

export const FormEdit = ({handlerEdit, tareaNueva, id}) => {

    const { handlerUpdateTareas } = useContext(ContextTarea)
    const [editarTarea, setEditarTarea] = useState( tareaNueva );

    const handlerUpdateTarea = (id) => {
        handlerUpdateTareas(id, editarTarea);
        handlerEdit();

        setEditarTarea("");
    }

    return (
        <form className="w-full border flex justify-between">
            <input
                className="w-full p-1" 
                type="text" 
                value={editarTarea}
                onChange={ (e) =>  setEditarTarea(e.target.value)} 
                autoFocus={true}
            />

            <div className="flex gap-6">
                <button type="button" className="w-7" onClick={ ()  => handlerUpdateTarea(id) }>
                    <img src="https://img.icons8.com/office/22/refresh--v1.png" alt="edit--v1"/>
                </button>

                <button type="button" className="w-7" onClick={handlerEdit}>
                    <img src="https://img.icons8.com/color/24/close-window.png" alt="delete--v1"/>
                </button>
            </div>
        </form>
    )
}
