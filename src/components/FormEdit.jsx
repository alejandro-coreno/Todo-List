import { useState } from "react"

export const FormEdit = ({handlerEdit, tareaNueva}) => {

    const [editarTarea, setEditarTarea] = useState( tareaNueva );

    return (
        <form className="w-full border flex justify-between">
            <input
                className="border border-red-300 w-full " 
                type="text" 
                value={editarTarea}
                onChange={ (e) =>  setEditarTarea(e.target.value)} 
                autoFocus={true}
            />

            <div className="flex gap-6">
                <button type="button">
                    {/* <img src="https://img.icons8.com/ios/22/edit--v1.png" alt="edit--v1"/> */}
                    Actualizar
                </button>

                <button onClick={handlerEdit}>
                    {/* <img src="https://img.icons8.com/ios/22/delete--v1.png" alt="delete--v1"/> */}
                    cerrar
                </button>
            </div>
        </form>
    )
}
