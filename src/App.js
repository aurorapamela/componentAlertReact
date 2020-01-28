import React from "react";
import "./App.css";

const Alert = props => {
  // aca tenemos que retorna el HTML esperado utilizando las propiedades
  return (
    <div class="alert alert-danger" role="alert">
      {props.text} {props.type}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Alert text="¡Ocurrió un error!" type="danger" />
      <Alert text="¡Todo salió de 10!" type="success" />
    </div>
  );
}
