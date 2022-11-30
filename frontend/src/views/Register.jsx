import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {NavLink} from 'react-router-dom'


const Register = () => {
  return (
    <>
    <Navigation />
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11">
          <input type="text" placeholder="Usuario" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Crear Cuenta</button>
          <p>
            <NavLink to={"/login"}>
            ¿Ya tienes cuenta?  <strong> Iniciar sesión</strong>
            </NavLink>
          </p>
        </form>
      </div>
    <Footer />
    </>
  )
}

export default Register

