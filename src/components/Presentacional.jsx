import { Link } from 'react-router-dom'

function Presentacional(props) {

  return (
    <section className="card-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.productos.map((item) => {

          return (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-image card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title overflow-hidden">{item.title}</h5>
                  <Link to={`/item/${item.id}`}  >
                    <button className="btn btn-outline-primary" type="submit">Ver mas</button>
                  </Link>  
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Presentacional


