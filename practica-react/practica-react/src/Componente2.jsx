import React, {useState} from "react";

export default function Componente2() {
    const [contador, setContador] = useState(0);
    return (
        <div className="contador">
            <h2><b>Contador:</b> {contador}</h2>
            <button onClick={() => setContador(contador + 1)} className="verde">Sumar (+1)</button>
            <button onClick={() => setContador(contador - 1)} className="rojo">Restar (-1)</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>
        </div>
    )
}
