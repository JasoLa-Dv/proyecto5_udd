import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Login = ({tag}) => {

  const[user, setUser] = useState({})

  const iniciarSesion = () => {
    console.log('inicia')
  }

const crearCuenta = () => {
  console.log('crear')
}


  const HandleSign = () => {
      if(tag === 'login') iniciarSesion()
      else crearCuenta()


      }

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>    
    <Navigation />  
    <div className="container d-flex flex-column justify-content-center align-items-center login-center " whidth="100%" >
      
        <form className="Login col-md-8 col-lg-4 col-11">
           <input name="correo" type="email" placeholder="Email" onChange={(e)=>handleInput(e)} />
          <input name="password" type="password" placeholder="Password" onChange={(e)=>handleInput(e)} />
          <button type="submit" onClick={HandleSign}>{tag === 'login' ? 'Iniciar sesión':'Crea tu cuenta'}</button>
          <p>
            <Link to={tag === 'login' ? '/signup' : '/login'}>
              {tag === 'login' ? 'Crear cuenta' : '¿Ya tienes cuenta? Iniciar sesión'}</Link>
          </p>
        </form>
      </div>
    <Footer />
    </>
  )
}

export default Login

