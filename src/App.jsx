import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Random from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (props) => (
  <div id="app">
    <h1>Fundamentos React </h1>
    <Card titulo="#04 - Desafio Aleatorio">
      <Random max={200} min={5}></Random>
    </Card>

    <Card titulo="#03 - Fragmento">
      <Fragmento></Fragmento>
    </Card>

    <Card titulo="#02 - Com Parametro">
      <ComParametro titulo="Situação do aluno" aluno="Larissa" nota={9.3} />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro> </Primeiro>
    </Card>
  </div>
);
