import React, {useState} from "react";

export default function Component() {

    const [texto, setText] = useState("")

    const [Actualizar, setActualizar] = useState("")



    const textOnChange = (e) => {
        setText(e.target.value)
    }

    const botonOnClick = (e) => {
        setActualizar(texto)
    }
    
    
    
  return (
    <div className="componente1">
        <h2><b>Texto Reactivo</b></h2>
        <input type="text" value={texto} onChange={textOnChange}/>
        <button onClick={botonOnClick}>Actualizar</button>
        <p><b>Texto Ingresado:</b> {texto}</p>
        <p><b>Texto Actualizado:</b> {Actualizar} </p>
    </div>
  )
}
