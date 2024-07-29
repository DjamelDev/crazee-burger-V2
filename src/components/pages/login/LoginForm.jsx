import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // état
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrenom("");
    navigate(`/order/${prenom}`);
  };

  // affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginForm;
