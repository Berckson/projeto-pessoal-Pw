import React, { useState } from "react";

function FormularioInscrição({ onEnviar }) {
  const [nome, setNome] = useState("");
  const [motivo, setMotivo] = useState("");
  const [data, setData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnviar({ nome, motivo,data});
    setNome("");
    setMotivo("");
    setData("")
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Nome do Estudante"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder ="Motivo"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
      />

      <input
        type="date"
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />



      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioInscrição;
