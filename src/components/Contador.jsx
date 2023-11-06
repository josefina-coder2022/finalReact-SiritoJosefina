import React from 'react'
import { useState } from 'react'

function Contador(props) {

    //Estados
    const [contador, setContador] = useState(props.inicial)
   
    //Acciones (métodos)
    const handleSumar = () => {
        setContador (contador + 1)    
    }

    const handleRestar = () => {
        if (contador > 1) {
            setContador (contador - 1)
        }
    }

    const handleBorrar = () => {
        setContador (1)
    }

    const handleConfirmar = () => {
        props.onAdd (contador)
    }

    //Vista
  return (
      <div>
          <p>Cantidad: {contador}</p>

          <button onClick={handleSumar} className="btn btn-primary m-2" type="submit">
              Sumar
          </button>

          <button onClick={handleRestar} className="btn btn-primary m-2" type="submit">
              Restar
          </button>

          <button onClick={handleBorrar} className="btn btn-primary m-2" type="submit">
              Borrar
          </button>

          <button onClick={handleConfirmar} className="btn btn-primary m-2" type="submit">
              Confirmar
          </button>
      </div>
          
    
  )
}

export default Contador