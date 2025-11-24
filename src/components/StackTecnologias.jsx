function StackTecnologias({ tecnologias }) {
    if (!tecnologias) return null;

    return (
        <div className="stack-container">
            {tecnologias.map((tec, index) => (
                <span key={index} className="stack-item">
                    {tec}
                </span>
            ))}
        </div>
    );
}

export default StackTecnologias;


