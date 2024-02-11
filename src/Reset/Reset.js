import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from '../Firebase/firebase'


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Home");
  }, [user, loading]);

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
          Enviar nova senha
        </button>

        <div>
          Não tem conta? <Link to="/Signup">Cadastre-se</Link> agora.
        </div>
      </div>
    </div>
  );
}

export default Reset;