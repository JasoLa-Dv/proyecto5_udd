import React from "react";
import {Link} from 'react-router-dom'

const CalltoActionSection = () => {
  return (
    <>
    <Link to={"/products"}>
      <div className="container text-center ">
      <img  src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1669830223/Shoe/Header.jpg" alt="" width= "100%"/>
      </div>
    </Link>
    
     <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h1>De nuestras manos a tus pies</h1>
              <h2>Necesitas más información?</h2>
              <p>Regístrese gratis y obtenga los últimos consejos.</p>
              <form className="form-section">
                <input placeholder="Tu Email..." name="email" type="email" />
                <br></br>
                <Link to={"/products"}>
                <input className="m-3" value="Suscribirse!" name="subscribe" type="submit" />
                </Link>                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default CalltoActionSection;
