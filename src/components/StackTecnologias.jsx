import React from "react";

function StackTecnologias() {
  const tecnologias = [
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
  ];

  // Función para cambiar el color de fondo según la tecnología
  const getColor = (tec) => {   
    if (tec === "MongoDB") return "#07e6eeff"; 
    if (tec === "HTML") return "#1edd1bff";       
    if (tec === "CSS") return "#f7f30bff";                  
    if (tec === "Git") return "#F34F29";        
    if (tec === "GitHub") return "#e21cf8ff";        
    if (tec === "Vite") return "#0deb71ff";      
    return "#ccc";                             
  };

  return (
    <div className="stack-container">
      {tecnologias.map((tec, index) => (
        <span
          key={index}
          className="stack-item"
          style={{
            backgroundColor: getColor(tec),
            color: tec === "JavaScript" ? "black" : "white",
          }}
        >
          {tec}
        </span>
      ))}
    </div>
  );
}


export default StackTecnologias;