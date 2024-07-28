import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // état
  const [prenom, setPrenom] = useState("");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrenom("");
  };

  const handleClick = () => {
    console.log("OK");
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
        <button onClick={handleClick}>Accédez à votre espace</button>
        <Link to="/order">Vers OrderPage</Link>
      </form>
    </div>
  );
};

export default LoginForm;
