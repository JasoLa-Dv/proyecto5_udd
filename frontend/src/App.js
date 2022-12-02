import './App.css';
import{Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Product from './views/Product';
import SingleProduct from './views/SingleProduct';
import Users from './views/Users';
import Account from './views/Account';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import Layout from './components/Layout';
import NotFound from './views/NotFound';

function App () {

   const context  = useContext(UserContext)
   const token = context.userState.token

return (
   <Routes>  
      <Route path='/' element={<Layout />}>
      <Route index element={<Home  token={token}/>} />
          <Route path='/login' element={<Login tag='login' />} />
          {!token && (<Route path='/signup' element={<Login tag='register' />} />)}
          <Route path='/account' element={<Account />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/NotFound' element={<NotFound />} />
          <Route path='*' element={<Navigate to={token ? '/' : '/NotFound'} />} />
          </Route>
     </Routes>

      
      
  )
}

export default App