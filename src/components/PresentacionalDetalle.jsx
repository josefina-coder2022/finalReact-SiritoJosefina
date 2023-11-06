

function PresentacionalDetalle(props) {

  return (
    <section className="card-container">
      <h1 className= "titulo-detalle"> Detalle del Producto</h1>
      <div className="card mb-3">
        <img className="card-image-detalle" src={props.producto.image} style={{ width: '50%' , marginLeft:'auto', marginRight:'auto'}} />
        <div className="card-body">
          <h1><b>{props.producto.title}</b></h1>
          <h2>${props.producto.price}</h2>
          <h4>Categoria: <b>{props.producto.category}</b></h4>
          <p className="card-text overflow-hidden">{props.producto.description}</p>
        </div>
      </div>
    </section>
  )
}

export default PresentacionalDetalle