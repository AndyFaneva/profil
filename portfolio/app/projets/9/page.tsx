// pages/projets/1.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

export default function Projet1() {
  const images = [
    "/CRM1.jpeg",
      "/CRM2.jpeg",
      "/CRM3.jpeg",
      "/CRM4.jpeg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

const techIcons = [
  // { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  // { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  // { name: "Tailwind", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  // { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
];


  return (
    <section className="min-h-screen flex flex-col items-center bg-blue-800 text-gray-100 py-16 px-4">
      {/* Contenu principal */}
      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-10">
        
        {/* Colonne gauche */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="w-full flex items-center justify-between">
        <Link
          href="/#portfolio"
          className="text-blue-400 hover:text-blue-200 font-semibold"
        >
          ← Retour
        </Link>
        <div className="w-16" />
      </div>
          {/* Titre */}
          <h2 className="text-3xl font-bold text-white">PAC CRM</h2>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed">
PAC CRM: Centralizes the management of heat pump maintenance, tracks service interventions, and handles the ordering of spare parts.
          </p>


          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 w-full max-w-xs mx-auto text-center">
  <div className="flex justify-around text-gray-100 text-lg font-bold">
    <div>
      <span className="block text-sm text-gray-300">Frontend</span>
      3
    </div>
    <div>
      <span className="block text-sm text-gray-300">Backend</span>
     2
    </div>
    <div>
      <span className="block text-sm text-gray-300">Others</span>
      1
    </div>
  </div>
</div>

          {/* Liste techno avec logos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">
              Technology use
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {techIcons.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="flex-1 flex flex-col items-center gap-6">
          {/* Carrousel */}
          <div className="relative w-full">
            <img
              src={images[currentImage]}
              alt={`Projet 1 - Image ${currentImage + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-300"
            />
            <button
              onClick={nextImage}
              className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition"
            >
              Next →
            </button>
          </div>

          {/* Fonctionnalités clés */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 text-blue-200">
             Key features
            </h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Interface responsive et fluide</li>
              <li>Authentification sécurisée</li>
              <li>Intégration API externe</li>
              <li>Optimisation SEO</li>
            </ul>
          </div>

          {/* Boutons en bas */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://lien-vers-la-demo.com"
              target="_blank"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Voir la démo <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ton-projet"
              target="_blank"
              className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition-colors"
            >
              Code source <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
