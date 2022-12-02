import products from '../data/Products';
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams();
    const product = products.find((product)=> product.id === id)

    const { image, name, description, price, countInStock } = product;

    return (

        <>
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={image} alt={name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{name}</div>
              </div>
              <p>{description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Precio</h6>
                  <span>$ {price} </span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Disponibilidad</h6>
                  {countInStock > 0 ? (
                    <span>En Stock</span>
                  ) : (
                    <span>Agotado</span>
                  )}
                  </div>
                  {product.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Cantidad</h6>
                      <select>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button className="round-black-btn">Agregar al carro</button>
                  </>
                ) : null}
        </div>
        </div>
        </div>
        </div>
        </div>
  
        </>
      );
    };


export default SingleProduct