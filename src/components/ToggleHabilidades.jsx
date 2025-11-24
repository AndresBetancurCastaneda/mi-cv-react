import { useState } from "react";
import Habilidades from "./Habilidades";

function ToggleHabilidades({ habilidades }) {
    const [mostrar, setMostrar] = useState(true);

    return (
        <div className="toggle-container">
            <button 
                className="toggle-btn"
                onClick={() => setMostrar(!mostrar)}
            >
                {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
            </button>

            {mostrar && (
                <div className="toggle-content">
                    <Habilidades habilidades={habilidades} />
                </div>
            )}
        </div>
    );
}

export default ToggleHabilidades;

