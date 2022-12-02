import UserContext from "./UserContext";
import { useReducer } from 'react';
import userReducers from "./UserReducers";
import axios from "axios";

const UserProvider = ({ children }) => {
const [ userState, dispatch] = useReducer(userReducers, { token: null })

const crearCuenta = async (user) => {
    try{
      const respuesta = await axios.post('http://localhost:4000/api/usuario', user)
      if(respuesta.data.success) {
        dispatch({ type: 'REGISTER', payload:respuesta.data.token})
      }
    } catch(error){ 
      console.log(error.message)
      }
    }

const logout = () => {
  dispatch({ type: 'LOGOUT'})
}


    return (
        <UserContext.Provider value={{userState, crearCuenta, logout }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider