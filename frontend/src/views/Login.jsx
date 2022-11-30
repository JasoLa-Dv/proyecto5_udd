import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Navigation />
    <div className="container d-flex flex-column justify-content-center align-items-center login-center " whidth="100%" >
        <form className="Login col-md-8 col-lg-4 col-11">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Iniciar sesión</button>
          <p>
            <Link to={"/register"}>Crea tu Cuenta</Link>
          </p>
        </form>
      </div>
    <Footer />
    </>
  )
}

export default Login