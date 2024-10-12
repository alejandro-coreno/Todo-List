
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";


const App = () =>  {

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[50%] flex gap-1 items-center  flex-col border p-5">
          
        <h1 className="text-xl text-sky-600 font-medium">Listado App</h1>

        {/* Componente Formulario */}
        <Formulario />

        {/* Componente Listado */}
        <Listado />
      </div>
    </div>
  );
}

export default App;
