import { v4 as uuidv4 } from 'uuid';


export const tareasReducer = ( state = [], action ) => {
    switch( action.type ) {

        // caso para agregar tareas actualiza el estado y lo retorna
        case 'handlerTareas' :
            
            return [...state , { nuevaTarea: action.payload, id: uuidv4()}]
        
        // caso para actulziar tareas actualiza el estado y lo retorna
        case 'handlerUpdateTareas':
            return state.map(( tarea ) => {
                if (tarea.id == action.payload.id) {
                    return {
                        ...state, nuevaTarea: action.payload.nuevoTexto
                    }
                }
                return tarea
            });
         // caso para eliminar tareas actualiza el estado y lo retorna
        case 'handlerDeleteTareas':
            return state.filter((tarea) => tarea.id !==  action.payload);
        
        default:
            return state;
    }
}

