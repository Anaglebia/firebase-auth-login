import React, {useEffect,useState} from 'react';
import {auth, logInWithEmailAndPassword,signInWithGoogle} from '../Firebase/firebase'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      <Spinner animation="grow" variant="success" />;
      return;
    }
    if (user) navigate("/Home");
  }, [user, loading, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login com Google
        </button>
        <div>
          <Link to="/reset">Esqueci a Senha</Link>
        </div>
        <div>
          Não tem conta? <Link to="/Signup">Cadastrar</Link> agora.
        </div>
      </div>
    </div>
  );
}
 
export default Login