import { useState } from "react";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import { datosPersonales, perfil, experiencias, estudios, tecnologias, habilidades as habilidadesIniciales } from "./data";

function App() {

  const [habilidades, setHabilidades] = useState(habilidadesIniciales);

  const agregarTecnologia = (tec) => {
    setHabilidades([...habilidades, tec]);
  };

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

      <StackTecnologias tecnologias={tecnologias} />

      {/* LISTA DE HABILIDADES */}
      <Habilidades habilidades={habilidades} />

      {/* BOTÓN PARA MOSTRAR/OCULTAR */}
      <ToggleHabilidades habilidades={habilidades} />

      {/* FORMULARIO */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </>
  );
}

export default App;


