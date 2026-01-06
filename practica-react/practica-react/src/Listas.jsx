import React, {useState} from "react";

export default function Lista() {
  const [elementos, setElementos] = useState([]);
  const [texto, setTexto] = useState("");

  const agregar = () => {
    if (texto.trim() !== "") {
      setElementos([...elementos, texto]);
      setTexto("");
    }
  };

  return (
    <div className="lista">
      <h2><b>Lista de elementos</b></h2>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
      />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {elementos.map((elementos, index) => (
          <li key={index}>{elementos}</li>
        ))}
      </ul>
    </div>
  );
}
