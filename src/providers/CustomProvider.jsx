import { createContext, useState } from 'react'

export const contexto = createContext()
const Provider = contexto.Provider


function CustomProvider(props) {

  const [cantidadTotal, setCantidadTotal] = useState(0)
  const [productos, setProducto] = useState([])


  const handleIncrementTotal = (prod) => {
    if (Object.keys(prod).length == 0) { //esto lo uso para limpiar el contexto
      setCantidadTotal(0)
      setProducto([])
    } else { //esto lo uso para cargar un producto al carrito
      setCantidadTotal(cantidadTotal + prod.cant)
      setProducto([...productos, prod])
    }
  }

  const valorDelContexto = {
    cantidadTotal: cantidadTotal,
    productos: productos,
    incrementTotal: handleIncrementTotal,
  }

  return (
    <Provider value={valorDelContexto}>
      {props.children}
    </Provider>
  )

}

export default CustomProvider