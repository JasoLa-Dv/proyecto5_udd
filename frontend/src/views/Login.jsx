import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = ({ tag }) => {
  const state = useContext(UserContext)

  const[user, setUser] = useState({})

  useEffect(()=>{
    document.title = tag === 'login' ? 'Iniciar Sesión' : 'Registro'
  }, [tag])

  const iniciarSesion = () => {
    console.log('inicia')
  }

  const HandleSign = () => {
      if(tag === 'login') iniciarSesion()
      else state.crearCuenta(user)   
      }

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>    
    <div className="container d-flex flex-column justify-content-center align-items-center login-center " whidth="100%" >
      
        <form className="Login col-md-8 col-lg-4 col-11">
          <input name="correo" type="email" placeholder="Email" onChange={(e)=>handleInput(e)} />
          <input name="password" type="password" placeholder="Password" onChange={(e)=>handleInput(e)} />
          <button type="submit" onClick={HandleSign}>{tag === 'login' ? 'Iniciar sesión':'Crea tu cuenta'}</button>
          <p>
            <Link to={tag === 'login' ? '/signup' : '/login'}>
              {tag === 'login' ? 'Crear cuenta' : '¿Ya tienes cuenta? Inicia sesión'}</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login

