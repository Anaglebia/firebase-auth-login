import React,{useEffect}from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {logout} from '../Firebase/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase'

const Home = () => {
  // const [logout, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) return;
  //   if (logout) navigate("/Login");
  // }, [logout, loading]);
  
  
  return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="#action2">Sobre</Nav.Link>
            <NavDropdown title="Contato" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Endereço</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Telefone
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
        {/* <Nav.Link href="/Home">Sair</Nav.Link> */}
       
        <button onClick={logout}>Sair</button>
      </Container>
    </Navbar>
    </>

  )
    
}
 
export default Home;