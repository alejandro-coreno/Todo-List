
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { useTarea } from "./hooks/useTarea";

const App = () =>  {

  const { tareas, handlerTareas, handlerUpdateTareas, handlerDeleteTareas } = useTarea();

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
