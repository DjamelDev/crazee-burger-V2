import React, { useState } from "react";

const LoginForm = () => {
  // état
  const [prenom, setPrenom] = useState("");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
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
