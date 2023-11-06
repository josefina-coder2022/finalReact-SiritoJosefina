import React, { useContext, useState } from 'react'
import { contexto } from '../providers/CustomProvider'
import { useParams } from 'react-router-dom'
import { app } from '../firebaseConfig'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useRef } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);


function Carrito() {

  const valorDelContexto = useContext(contexto)
  const params = useParams
  const [resultadoCompra, setResultadoCompra] = useState("");

  const nombreRef = useRef(null);
  const emailRef = useRef(null);
  const telefonoRef = useRef(null);

  const handleResultadoCompra = (resultado) => {
    setResultadoCompra(resultado)
  }

  const handleFinalizarCompra = () => {

    const nombre = nombreRef.current.value;
    const email = emailRef.current.value;
    const telefono = telefonoRef.current.value;

    if (nombre == "" || email == "" || telefono == "") {
      Swal.fire({
        icon: "Error",
        title: "Debe completar todos los campos...",
      });
      return
    }

    let datosUsuario = {
      nombre: nombre,
      email: email,
      telefono: telefono
    }

    const compra = {
      carrito: valorDelContexto.productos,
      usuario: datosUsuario,
      fecha_compra: serverTimestamp()
    }


    const db = getFirestore(app)
    const comprasCollection = collection(db, "compras")
    const consulta = addDoc(comprasCollection, compra)

    consulta.then((resultado) => {

      valorDelContexto.incrementTotal({})
      handleResultadoCompra(resultado.id)
      MySwal.fire({
        title: '¡Compra guardada con éxito!',
        icon: 'success',
      });

      // Limpia los campos de entrada
      nombreRef.current.value = '';
      emailRef.current.value = '';
      telefonoRef.current.value = '';
    })

    consulta.catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "algo salió mal al guardar la compra!",
      });
    })
  }

  if (resultadoCompra == "") {
    if (valorDelContexto.cantidadTotal > 0) {

      return (

        <div>
          <hr />
          <h1 className= "titulo-carrito">Productos en el carrito:<br /><br /></h1>
          {valorDelContexto.productos.map((item) => {
            return (
              <div key={item.precio}>
                <h5>{item.nombre}</h5>
                <div>Precio: ${item.precio}</div>
                <div>Cantidad: {item.cant}</div>
                <hr />
              </div>
            )
          })}


          <div className="conteinerCarrito">
            <h1>Completa tus datos para finalizar la compra:<br /><br /></h1>
            <div>
              <div>
                <label>Nombre:</label>
                <input type="text" ref={nombreRef} className="inputCarrito" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" ref={emailRef} className="inputCarrito" />
              </div>
              <div>
                <label>Teléfono:</label>
                <input type="tel" ref={telefonoRef} className="inputCarrito" />
              </div>
            </div>

            <button onClick={handleFinalizarCompra} className="btn btn-primary">
              Finalizar compra
            </button>
            <hr />
          </div>
        </div>
      )
    } else {
      return (
        <div className= "carrito-vacio">
          <h1>No hay elementos en el carrito<br /><br /></h1>
        </div>

      )
    }
  } else {
    return (
      <div className= "comprobante-carrito">
        <h1>Tu comprobante de compra es:  {resultadoCompra}</h1>
      </div>

    )
  }

}

export default Carrito



