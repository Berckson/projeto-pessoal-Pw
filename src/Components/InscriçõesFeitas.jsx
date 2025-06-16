import React, { useState } from "react"
import FormularioInscrição from "./FormularioInscrição"
import ListaRealizada from "./ListaRealizada";

function IncriçõesFeitas() {
  const [comentarios, setComentarios] = useState([])

  const adicionarComentario = ({ nome, motivo,data}) => {
    if (nome.trim() && motivo.trim() && data.trim()) {
      setComentarios([...comentarios, { nome, motivo,data}]);
    }
  }

  return (
    <div className="feed-container">
      <h2>Feed de Comentários</h2>
      <FormularioInscrição onEnviar={adicionarComentario} />
      <ListaRealizada comentarios={comentarios} />
    </div>
  )
}

export default IncriçõesFeitas;