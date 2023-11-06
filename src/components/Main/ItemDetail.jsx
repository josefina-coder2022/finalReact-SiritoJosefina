import React, { useContext, useState } from 'react'
import Contador from '../Contador'
import { contexto } from '../../providers/CustomProvider'
import { useNavigate } from 'react-router-dom'

function ItemDetail({ producto }) {

    const navigate = useNavigate()

    const valorDelContexto = useContext(contexto)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const handleDetalleContador = (cantidadRecibida) => {
        setCantidadSeleccionada(cantidadRecibida)
    }

    const handleClickNavigate = () => {
        let prod = {
            cant: cantidadSeleccionada,
            nombre: producto.title,
            precio: producto.price
        }
        valorDelContexto.incrementTotal(prod)
        navigate("/cart")
    }

    if (cantidadSeleccionada > 0) {
        return (
            <section className="card-container">

                <h1 className="titulo-detalle"> Detalle del Producto</h1>

                <div className="card mb-3">
                    <img className="card-image-detalle" src={producto.image} style={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="card-body">
                        <h1><b>{producto.title}</b></h1>
                        <h2>${producto.price}</h2>
                        <h4>Categoria: <b>{producto.category}</b></h4>
                        <p className="card-text overflow-hidden">{producto.description}</p>

                    </div>
                </div>

                <button onClick={handleClickNavigate} className="btn btn-primary" type="submit">
                    Agregar al carrito
                </button>
            </section>
        )
        

    } else {
        return (
            <section className="card-container">

                <h1 className="titulo-detalle"> Detalle del Producto</h1>

                <div className="card mb-3">
                    <img className="card-image-detalle" src={producto.image} style={{ width: '20%', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="card-body">
                        <h1><b>{producto.title}</b></h1>
                        <h2>${producto.price}</h2>
                        <h4>Categoria: <b>{producto.category}</b></h4>
                        <p className="card-text">{producto.description}</p>

                    </div>
                </div>

                <Contador inicial={1} onAdd={handleDetalleContador} />
            </section>
        )

    }

}

export default ItemDetail
