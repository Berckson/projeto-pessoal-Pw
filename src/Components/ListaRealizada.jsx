import React from "react";

function ListaRealizada({ comentarios }) {
  return (
    <div className="comentarios">
      <h3>Frenquência:</h3>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <strong>{comentario.nome}:</strong> {comentario.motivo}  <p>Data:{comentario.data.split('-').reverse().join('-')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRealizada;
