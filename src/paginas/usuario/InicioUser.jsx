import React, { useEffect, useState } from "react";
import "./InicioUser.css";

const InicioUser = () => {
  const usuario = {
    nombre: "Valentina",
    ahorro: 38500,
  };

  const frases = [
    "💡 Sigue ahorrando, cada peso cuenta.",
    "🎯 Tener un ahorro es tener libertad para decidir.",
    "📘 El conocimiento es la mejor inversión.",
    "💰 Tu yo del futuro te agradecerá por ahorrar hoy.",
    "🧠 Estudiar te cuesta, pero no estudiar te cuesta más.",
  ];

  const [indiceFrase, setIndiceFrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndiceFrase((prev) => (prev + 1) % frases.length);
        setFade(true); 
      }, 500);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [frases.length]);

  return (
    <div className="inicio-user">
      <h1>👋 ¡Hola, {usuario.nombre}!</h1>
      <h2>💰 Tienes ahorrado: ${usuario.ahorro.toLocaleString()} COP</h2>

      <div className="noticia-destacada">
        <h3>📰 Noticias para ti:</h3>
        <p className={`frase-animada ${fade ? "fade-in" : "fade-out"}`}>
          {frases[indiceFrase]}
        </p>
      </div>
    </div>
  );
};

export default InicioUser;
