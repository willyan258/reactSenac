import React from "react";
import "./Comentario.css";
import dadosComentarios from "./dados";

export default function Comentario(props) {
  // function maisucula() {
  //   return props.title;
  // }

  function Comentarios() {
    return dadosComentarios.map((comentario) => {
      return (
        <>
          <div className="comentario">
            <h1 className="titulo">{comentario.titulo}</h1>
            <h3 className="subtitulo">{comentario.subtitulo}</h3>
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              praesentium.
            </p>
          </div>
        </>
      );
    });
  }
  return <>{Comentarios()}</>;
}
