import React from 'react'
import ItemList from '../components/Main/ItemList'
import { useParams } from 'react-router-dom'



function ItemListContainer() {

    const params = useParams()
    if (!params.categoria) { 
        params.categoria = "all"
    }

  return (
          <ItemList
              greeting="Bienvenidos a..."
              nombre="Clotheshop"
              categoria={params.categoria}
          />
  )
}

export default ItemListContainer