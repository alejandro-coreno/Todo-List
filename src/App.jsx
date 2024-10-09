import { useState } from "react"
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { v4 as uuidv4 } from 'uuid';


const App = () =>  {

  
  const [tareas, setTareas] = useState([]);

  const handlerTareas = ( nuevaTarea ) => {
    setTareas([...tareas, {
      nuevaTarea, 
      id: uuidv4()
    }])
  }


  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[50%] flex gap-1 items-center  flex-col border p-5">
          
        <h1 className="text-xl text-sky-600 font-medium">Listado App</h1>

        <Formulario handlerTareas={handlerTareas} />

        <Listado tareas={tareas} />
          
      </div>
    </div>
  );
}

export default App;
