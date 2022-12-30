import React from "react";

export default function Random(props) {
  const { max, min } = props;
  return (
    <div>
      <p>
        <h3>Valor maximo: {max}</h3>
        <h3>Valor minimo: {min}</h3>
        Valor Aleatorio:{" "}
        <strong> {parseInt(Math.random() * (max - min) + min)}</strong>
      </p>
    </div>
  );
}
