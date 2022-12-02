import {Link} from 'react-router-dom'
import axios from 'axios'
import { useContext, useState} from 'react'
import UserContext from '../context/UserContext'
import { useEffect } from 'react'


function Product() {

  const context = useContext(UserContext)
      useEffect(() => {
        document.title = 'Productos'
      obtenerPro()
    },[])
    

  const [products, setProducts] = useState([])

  const obtenerPro = async () => {
    try{
            const respuesta = await axios.get('http://localhost:4000/api/productos/')
            const { success, products } = respuesta.data

            if(success) {
              setProducts(products)
            }
            console.log(respuesta.data)
           
    }catch(error){
      console.log(error)
    }
  }
 
  return (
        <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                    item={product}
                    
                              >
                    <div className="border-product">
                      <Link to={`/products/${product._id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product._id}`}>
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
 )
}

export default  Product