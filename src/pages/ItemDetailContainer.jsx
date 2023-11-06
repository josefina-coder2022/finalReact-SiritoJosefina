import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/Main/ItemDetail'
import { app } from '../firebaseConfig'
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {

  //Estados
  const [producto, setProductos] = useState([])
  const params = useParams()

  //Efectos
  useEffect(() => {

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    
    const prod = doc(productosCollection, params.id)
    const consulta = getDoc(prod)

    consulta.then((resultado) => {
      setProductos(resultado.data())
    })

    consulta.catch((error) => {
      console.log({ error })
    })    

  }, [])

  return (
      <ItemDetail
        producto={producto}
      />
  )
}

export default ItemDetailContainer