function Habilidades({ habilidades }) {
    return (
        <ul className="habilidades-list">
            {habilidades.map((h, index) => (
                <li key={index} className="habilidad-item">
                    {h}
                </li>
            ))}
        </ul>
    );
}

export default Habilidades;

