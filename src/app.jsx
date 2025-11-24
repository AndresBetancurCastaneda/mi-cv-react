import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";

import { datosPersonales, perfil, experiencias, estudios } from "./data";


function App() {
  return (
    <>
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={perfil.resumen} />

      <Experiencia lista={experiencias} />

      <Educacion estudios={estudios} />
      <StackTecnologias />
    </>
  );
}

export default App;
