import { useState } from "react";

function Tarea({ tarea, completarTarea, eliminarTarea, editarTarea }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarea.texto);

  const manejarEdicion = () => {
    if (modoEdicion) {
      editarTarea(tarea.id, textoEditado);
    }
    setModoEdicion(!modoEdicion);
  };

  return (
    <div
      style={{
        textDecoration: tarea.completada ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      {modoEdicion ? (
        <input
          type="text"
          value={textoEditado}
          onChange={(e) => setTextoEditado(e.target.value)}
        />
      ) : (
        <span>{tarea.texto}</span>
      )}
      <div>
        <button onClick={manejarEdicion}>{modoEdicion ? "💾" : "✏️"}</button>
        <button onClick={() => completarTarea(tarea.id)}>✅</button>
        <button onClick={() => eliminarTarea(tarea.id)}>❌</button>
      </div>
    </div>
  );
}

export default Tarea;