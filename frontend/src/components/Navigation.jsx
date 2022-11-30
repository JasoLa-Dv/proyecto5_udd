import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

const Navigation = () => {
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
                      <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                        <Nav.Link as= {NavLink} to="/admin/users">Usuarios</Nav.Link></NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav className="m-3">
                        <Nav.Link as= {NavLink} to="/login">Iniciar sesión</Nav.Link>
                        <Nav.Link as= {NavLink} to="/register">Registro</Nav.Link>
                        <Nav.Link as= {NavLink} to="/account">Mi Cuenta</Nav.Link>
                    </Nav>
          </Navbar.Collapse>
   </Navbar>
  )
}

export default Navigation


