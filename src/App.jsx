import React from "react";
import IncriçõesFeitas from "./Components/InscriçõesFeitas";
import './style.css'
import Avatares from "./Components/Avatares";


export default function App() {
  return (
    <div>
      <div className="imagens">
        <Avatares />
      </div>

      <div className="app">
        <h1 className="title">SYSFrenquency</h1>
        <IncriçõesFeitas />
      </div>

    </div>
  )
}