import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from '../context/UserContext';
import { useContext } from 'react';



const Navigation = () => {

const context = useContext(UserContext)
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" >
                            <img
                                alt=""
                                src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1668993482/Shoe/Logo.png"
                                width="140"
                                height="40"
                                className="d-inline-block align-top m-3"/>
            
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as= {NavLink} to="/">Home</Nav.Link>
                      <Nav.Link as= {NavLink} to="/products">Productos</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown className="m-3" title="Iniciar Sesión" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/account">Mi Cuenta</NavDropdown.Item>
                            <NavDropdown.Item onClick={context.logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                      <div className="m-3">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                                            height="50" alt="Avatar" loading="lazy" />
                      </div>
                     

                    </Nav>


          </Navbar.Collapse>
   </Navbar>
  )
                  
  }
export default Navigation


