import react from "react";

function Experiencia() {
  const experiencias = [
    { cargo: "Desarrollador Backend", empresa: "SENA", año: 2025, descripcion: "Creación y mantenimiento de APIs con Node.js y Express." },
{ cargo: "Desarrollador Frontend", empresa: "SENA", año: 2025, descripcion: "Diseño de interfaces interactivas con React y Tailwind." },
{ cargo: "Desarrollador Full Stack", empresa: "SENA", año: 2025, descripcion: "Implementación de soluciones completas con MERN Stack." },
{ cargo: "Desarrollador de Aplicaciones Web", empresa: "SENA", año: 2025, descripcion: "Construcción de sitios dinámicos con JavaScript y frameworks modernos." },
{ cargo: "Desarrollador de Software Junior", empresa: "SENA", año: 2025, descripcion: "Apoyo en proyectos de desarrollo y corrección de errores." },
{ cargo: "Desarrollador de APIs", empresa: "SENA", año: 2025, descripcion: "Diseño y documentación de servicios RESTful." },
{ cargo: "Desarrollador de Aplicaciones Móviles", empresa: "SENA", año: 2025, descripcion: "Creación de apps híbridas con React Native." },
{ cargo: "Desarrollador de Interfaces", empresa: "SENA", año: 2025, descripcion: "Implementación de componentes reutilizables en React." },
{ cargo: "Desarrollador de Sistemas", empresa: "SENA", año: 2025, descripcion: "Programación de módulos funcionales para software institucional." },
{ cargo: "Desarrollador de Software en Práctica", empresa: "SENA", año: 2025, descripcion: "Colaboración en proyectos ágiles con metodologías SCRUM." }

  ];

  return (
    <section className="experiencia-section">
      <div className="experiencia-card">
        <h2 className="experiencia-titulo">Experiencia en Desarrollo de Software</h2>
        <ul className="experiencia-lista">
          {experiencias.map((exp, index) => (
            <li key={index} className="experiencia-item">
              <h3>
                <strong>{exp.cargo}</strong> - <span className="empresa">{exp.empresa}</span> ({exp.año})
              </h3>
              <p>{exp.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experiencia;