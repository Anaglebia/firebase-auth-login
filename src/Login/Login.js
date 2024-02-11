import React, {useEffect,useState} from 'react';
import {auth, logInWithEmailAndPassword,signInWithGoogle} from '../Firebase/firebase'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/Home");
  }, [user, loading, navigate]);

  return (
    <Container  className="mt-4">
    <Form className="sm"> 
      <Form.Group as={Row} className="mb-2" controlId="formGroupEmail">
      <Form.Label column sm={2}>Email</Form.Label>
      <Col sm={4}>
        <Form.Control type="email" placeholder="seu@email.com"value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col sm={4}>
        <Form.Control className="col-md-2 mx-auto" type="password" placeholder="******" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          </Col>
      </Form.Group>
      
        <Button
          className="m-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        <Button className="m-3" variant="secondary" onClick={signInWithGoogle}>
          Login com Google
        </Button>
        <div>
          <Link to="/reset">Esqueci a Senha</Link>
        </div>
        <div>
          Não tem conta? <Link to="/Signup">Cadastrar</Link> agora.
        </div>
    </Form>
    </Container>
  );
}
 
export default Login