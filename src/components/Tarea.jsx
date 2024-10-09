import { useState } from "react";
import { FormEdit } from "./FormEdit";

export const Tarea = ({ item }) => {

    const [edit, setEdit] = useState(false);

    const handlerEdit = () => {
        setEdit(!edit )
    }

    return (
        <div className="border px-3 py-2 flex justify-between">

            
            {
                edit 
                ? 
                    <FormEdit handlerEdit={handlerEdit} tareaNueva={item.nuevaTarea} /> 
                : 
                    <h1 className="font-normal tracking-wide">{item.nuevaTarea}</h1>
            }
            <div className="flex gap-6">
                
                {
                    !edit &&
                    <>
                        <button type="button" onClick={ handlerEdit }>
                            <img src="https://img.icons8.com/ios/22/edit--v1.png" alt="edit--v1"/>
                        </button>

                        <button>
                            <img src="https://img.icons8.com/ios/22/delete--v1.png" alt="delete--v1"/>
                        </button>
                    </>
                }
               
            </div>
        </div>
    );
}


