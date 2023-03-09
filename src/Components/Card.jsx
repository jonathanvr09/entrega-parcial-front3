import React from "react";

function Card({ data }) {
  return (
    <div>
      <p>Pais: {data.imputOne}</p>
      <p>Capital: {data.imputTwo}</p>
    </div>
  );
}

export default Card;