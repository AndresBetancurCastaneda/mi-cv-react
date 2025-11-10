import React from "react";

function Educacion() {
  const educacion = [
    {
      institucion: "I.E Alberto Díaz Muñoz",
      curso: "Bachiller Académico",
      año: 2024,
    },
    {
      institucion: "SENA - Centro de Tecnología de la Manufactura Avanzada (CTMA)",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
      año: "2025 - 2027",
    },
    {
      institucion: "SENA",
      curso: "Curso de Programación Básica en JavaScript",
      año: 2024,
    },
    {
      institucion: "SENA",
      curso: "Curso de Desarrollo Web con HTML y CSS",
      año: 2024,
    },
    {
      institucion: "SENA",
      curso: "Curso de Bases de Datos con MySQL",
      año: 2025,
    },
    {
      institucion: "Google Activate",
      curso: "Curso de Fundamentos de la Nube",
      año: 2024,
    },
    {
      institucion: "Platzi",
      curso: "Curso de React para Principiantes",
      año: 2025,
    },
    {
      institucion: "Udemy",
      curso: "Curso de Node.js y Express desde Cero",
      año: 2025,
    },
    {
      institucion: "Cisco Networking Academy",
      curso: "Introducción a la Ciberseguridad",
      año: 2024,
    },
    {
      institucion: "SENA",
      curso: "Taller de Control de Versiones con Git y GitHub",
      año: 2025,
    },
  ];

  return (
    <section className="educacion-section">
      <div className="educacion-card">
        <h2 className="educacion-titulo">Formación Académica y Cursos</h2>
        <ul className="educacion-lista">
          {educacion.map((edu, index) => (
            <li key={index}>
              <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Educacion;
