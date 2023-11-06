import React from 'react'
import Container from '../Container'


function ItemList ({ greeting, nombre, categoria }) {
  
  return (
    <>
      <section className='conteinerItemList'>
        <h1>{greeting} {nombre}</h1>
      </section>

      <Container  categoria={categoria} detalleId={""}/>
    </> 
  )
}

export default ItemList
