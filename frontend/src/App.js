import './App.css';
import{Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
//import Register from './views/Register';
import Product from './views/Product';
import SingleProduct from './views/SingleProduct';
import Users from './views/Users'
import Account from './views/Account'


const App = () => {
  return (
   <Routes>
  
      <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login tag='login'/>} />
          <Route path='/signup' element={<Login tag='register' />} />
          <Route path='/account' element={<Account />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/admin/users' element={<Users />} />


          <Route path='*' element={<Home />} />

     </Routes>
  )
}

export default App