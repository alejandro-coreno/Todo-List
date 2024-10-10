import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { v4 as uuidv4 } from 'uuid';

const initialValues = localStorage.getItem("tareas") || [];

const App = () =>  {

  const [tareas, setTareas] = useState(initialValues);

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
  }, [tareas])


  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[50%] flex gap-1 items-center  flex-col border p-5">
          
        <h1 className="text-xl text-sky-600 font-medium">Listado App</h1>

        <Formulario handlerTareas={handlerTareas} />

        <Listado 
          tareas={tareas} 
          handlerDeleteTareas={handlerDeleteTareas} 
          handlerUpdateTareas={handlerUpdateTareas} 
        />
          
      </div>
    </div>
  );
}

export default App;
