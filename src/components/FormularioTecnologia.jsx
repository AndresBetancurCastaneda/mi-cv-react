import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
    const [nuevaTec, setNuevaTec] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaTec.trim() === "") return;

        agregarTecnologia(nuevaTec);
        setNuevaTec("");
    };

    return (
        <form className="form-tec" onSubmit={handleSubmit}>
            <input
                className="input-tec"
                type="text"
                placeholder="Agregar tecnología"
                value={nuevaTec}
                onChange={(e) => setNuevaTec(e.target.value)}
            />
            <button className="btn-tec" type="submit">Agregar</button>
        </form>
    );
}

export default FormularioTecnologia;
