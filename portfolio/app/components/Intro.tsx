"use client";
import { useEffect, useState } from "react";

export default function Intro({ visible }: { visible: boolean }) {
  const name = "FANEVA";
  const [shownLetters, setShownLetters] = useState<boolean[]>(Array(name.length).fill(false));

useEffect(() => {
  if (!visible) return;

  // Affichage des lettres (existant)
  const indices = [...Array(name.length).keys()];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  indices.forEach((idx, order) => {
    const delay = Math.random() * 500 + order * 200;
    setTimeout(() => {
      setShownLetters((prev) => {
        const copy = [...prev];
        copy[idx] = true;
        return copy;
      });
    }, delay);
  });

  // Voix
  const utterance = new SpeechSynthesisUtterance("Bonjour, c'est Faneva");
  utterance.lang = "fr-FR";
  utterance.rate = 1;
  utterance.pitch = 1;

  // Événements pour debug
  utterance.onstart = () => console.log("🎤 La voix a commencé !");
  utterance.onend = () => console.log("✅ La voix a fini de parler !");
  utterance.onerror = (e) => console.log("❌ Erreur voix :", e);

  window.speechSynthesis.speak(utterance);

}, [visible]);


  return visible ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-6xl font-bold z-50">
      {name.split("").map((letter, idx) => (
        <span
          key={idx}
          className={`inline-block transition-transform duration-400 ${
            shownLetters[idx] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {letter}
        </span>
      ))}
    </div>
  ) : null;
}
