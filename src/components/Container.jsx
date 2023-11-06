import React, { useState, useEffect } from 'react'
import Presentacional from './Presentacional'
import { app } from '../firebaseConfig'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


function Container({ categoria }) {

  //Estados
  const [productos, setProductos] = useState([])

  //Efectos
  useEffect(() => {

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    let filtro = query(productosCollection, where("category", "==", categoria))
    if (categoria == "all") { 
      filtro = query(productosCollection)
    }    
    
    const consulta = getDocs(filtro) // aca iría el filtro como parametro

    consulta.then((resultado) => {
      const productos = resultado.docs.map(doc => {
        const id = doc.id
        const data = doc.data()
        data.id = id
        return data
      })
      setProductos(productos)
    })

    consulta.catch((error) => {
      console.log({ error })
    })    

}, [categoria])

//Vista
return (
  <Presentacional productos={productos} />
)

}

export default Container

