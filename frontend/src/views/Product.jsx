import Navigation from '../components/Navigation'
import Footer from '../components/Footer' 
import products from '../data/Products'
import {Link} from 'react-router-dom'
//import { useState } from 'react'
//import axios from 'axios'


function Product() {

  /* const [products, setProducts] = useState([])

  const obtener = async () => {
    try{
        const respuesta = await axios.get('http://localhost:4000(api/productos')
        console.log(respuesta.data)

    } catch (error) {

    }


  } */

  return (
    <>
   <Navigation />
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product.id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product.id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product.id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <h3>$ {product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </div>
   <Footer />
   </>
  )
}

export default Product