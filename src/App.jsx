import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleButtom = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    console.log({ enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove)
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={handleButtom}>
        {enabled ? "Desactivar Puntero" : "Activar Puntero"} Seguir Puntero
      </button>
    </main>
  );
}

export default App;
