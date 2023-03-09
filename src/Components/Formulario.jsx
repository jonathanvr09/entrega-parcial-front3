import React, { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [imputOne, setimputOne] = useState("");
  const [imputTwo, setimputTwo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imputOne.trim().length < 3 || imputOne.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (imputTwo.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    setError("");
    const cardData = { imputOne,imputTwo };
    return <Card data={cardData} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imputOne">Pais:</label>
      <input
        type="text"
        id="imputOne"
        value={imputOne}
        onChange={(e) => setimputOne(e.target.value)}
      />
      <br />

      <label htmlFor="imputTwo">Capital:</label>
      <input
        type="text"
        id="imputTwo"
        value={imputTwo}
        onChange={(e) => setimputTwo(e.target.value)}
      />
      <br />

      <button type="submit">Validar</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default Formulario;