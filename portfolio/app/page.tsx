'use client';

import {useState, useEffect, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import { ArrowDownIcon, ArrowTopRightOnSquareIcon, InformationCircleIcon, } from "@heroicons/react/24/solid";
import {  LinkedinIcon, FacebookIcon, GithubIcon, Phone, Facebook, ArrowRightIcon} from 'lucide-react';
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Modal from "./components/Modal";

const projectsData = {
  projets: [
    {
      title: "SaVir",
      image: "/Savir1.jpg",
      description: "Salon des étudiants virtuel.",
      date:"24 Juin 2024",
      link: "/projets/1",
    },
    {
      title: "GPI",
      image: "/GPI_v1.0.png",
      description: "Gestion du Parc Informatique.",
        date:"04 Juillet 2024",
      link: "/projets/2",
    },
     {
      title: "PGG4P",
      image: "/pgg4p.PNG",
      description: "Plateforme de paix, changement climatique et gestion des risques.",
        date:"2024",
      link: "/projets/3",
    },
     {
      title: "C'MADA Pro",
      image: "/cmadapro.png",
      description: "Système de commerce B2B.",
        date:"Mars 2025",
      link: "/projets/4",
    },
     {
      title: "G'Présent",
      image: "/iot1.jpeg",
      description: "Système de gestion de présence automatique.",
        date:"Actuellement",
      link: "/projets/5",
    },
     {
      title: "Ancien portfolio",
      image: "/portfolio1.png",
      description: "Mon premier portfolio.",
        date:"2024",
      link: "/projets/6",
    },
     {
      title: "OKEMI",
      image: "/OKEMI.png",
      description: "Olona KEly MIresaka: système de messagerie instantanné.",
        date:"2025",
      link: "/projets/7",
    },
     {
      title: "Nouveau Portfolio",
      image: "/portfolio2.png",
      description: "Nouveau portfolio.",
        date:"2025",
      link: "/projets/8",
    },
    {
      title: "PAC CRM",
      image: "/CRM2.jpeg",
      description: "PAC CRM: Centraliser la gestion du dépannage des pompes à chaleur, le suivi des interventions et la commande de pièces détachées.",
        date:"Actuellement",
      link: "/projets/9",
    },
  ],
  certificats: [
    {
      title: "ARDUINO",
      image: "/Arduino.jpeg",
      description: "Basics Of Arduino Programming.",
      date:"2025",
      link: "/certificats/1",
    },
    {
      title: "IOT",
      image: "/Iot.jpeg",
      description: "Introduction To Internet Of Things.",
      date:"2025",
      link: "/certificats/2",
    },
    {
      title: "ISOC",
      image: "/Isoc.png",
      description: "Internet Society.",
      date:"2024",
      link: "/certificats/2",
    },
     {
      title: "Risk Management",
      image: "/BasicOfRiskManagment.png",
      description: "Basic Of Risk Management.",
      date:"2024",
      link: "/certificats/2",
    },
    
  ],
  autres: [
    {
      title: "Autre projet 1",
      image: "/angular.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
 {
      title: "Autre projet 1",
      image: "/Arduino.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/Java.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/Lin.jpeg",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/Mysql.jpeg",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/Nest.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/NEXT.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
    {
      title: "Autre projet 1",
      image: "/PY.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
    {
      title: "Autre projet 1",
      image: "/REACT.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
    {
      title: "Autre projet 1",
      image: "/RN.jpeg",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
    {
      title: "Autre projet 1",
      image: "/Win.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
    {
      title: "Autre projet 1",
      image: "/html.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/css.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
     {
      title: "Autre projet 1",
      image: "/js.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
        {
      title: "Autre projet 1",
      image: "/LGC.png",
      description: "Description courte de l'autre projet 1.",
      link: "/autres/1",
    },
  ],
};

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
 const [selectedImage, setSelectedImage] = useState<string | null>(null);
 const [stars, setStars] = useState([]);

useEffect(() => {
  const generated = Array.from({ length: 50 }, () => ({
    width: `${Math.random() * 2 + 1}px`,
    height: `${Math.random() * 2 + 1}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random(),
    animationDelay: `${Math.random() * 5}s`,
  }));
  setStars(generated);
}, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      image: "/web.jpeg",
      description:
        "I build responsive, high-performance web applications using React, Next.js, and modern UI design principles.",
    },
    {
      id: 2,
      title: "Mobile Development",
      image: "/mobile.jpeg",
      description:
        "I design and develop Android apps that are sleek, intuitive, and efficient for every user.",
    },
    {
      id: 3,
      title: "IoT Solutions",
      image: "/iot1.jpeg",
      description:
        "I integrate IoT technologies to create smarter, connected systems.",
    },
     {
      id: 4,
      title: "Maintenance & Optimization",
      image: "/maintenance.jpeg",
      description:
        "Offering continuous support, performance tuning, and system optimization to ensure reliability and scalability.",
    },
  ];
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("✅ Message sent successfully (fictitious demo)");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
    const skills = [
    { name: "Web Development", level: 90, color: "bg-blue-400" },
    { name: "Mobile Development", level: 80, color: "bg-blue-400" },
    { name: "Software & Tools", level: 75, color: "bg-blue-400" },
    { name: "Internet of Things (IoT)", level: 70, color: "bg-blue-400" },
    { name: "UI/UX Design", level: 85, color: "bg-blue-400" },
    { name: "Database & Security", level: 78, color: "bg-blue-400" },
  ];
  const images = [
    '/photo1.jpeg',
  '/photo2.png',
  ]

  const [currentImage, setCurrentImage] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  if (typeof window !== "undefined") {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }
}, []);

  const [activeTab, setActiveTab] = useState("projets");

  const tabs = [
    { id: "projets", label: "Projects" },
    { id: "certificats", label: "Certificats" },
    { id: "autres", label: "Tech Stack" },
  ];

  // Détecte si l’écran est petit
useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="mt-16">
      {/* Accueil */}
<section
  id="home"
  className={`relative h-screen flex items-center justify-center px-4 pt-12 ${isMobile ? "" : "md:flex-row flex-col"}`}
>
  {/* Background animé pour tous les écrans */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Dégradé bleu */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500"></div>

    {/* Étoiles scintillantes */}
    {stars.length > 0 && (
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={s}
          />
        ))}
      </div>
    )}

    {/* 🌠 Étoiles filantes */}
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={`shooting-${i}`}
        className="shooting-star absolute bg-gradient-to-r from-white to-transparent"
      />
    ))}

    {/* 🚀 Fusées */}
    {Array.from({ length: 2 }).map((_, i) => (
      <div key={`rocket-${i}`} className="rocket absolute">
        <div className="body bg-red-500 w-2 h-6 rounded-t-full"></div>
        <div className="flame bg-orange-400 w-2 h-4 rounded-b-full animate-flame"></div>
      </div>
    ))}

    {/* Image de fond mobile */}
    {isMobile && (
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />
    )}
  </div>

  {/* Texte */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={`text-left max-w-xs relative z-20 ${
      isMobile ? "bg-black/50 p-4 rounded-md" : "md:w-1/2 text-center md:text-left"
    }`}
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 
      bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 
      bg-clip-text text-transparent 
      animate-gradient">
      Faneva ANDRIANAINA
    </h1>

    <div className="relative h-8 mb-6">
      <p className="absolute w-full text-lg sm:text-xl font-bold underline text-blue-900 animate-fadeInOut1">
        Web & Mobile <span className="text-blue-400 font-semibold">Developer</span>
      </p>
      <p className="absolute w-full text-lg sm:text-xl font-bold underline text-purple-700 animate-fadeInOut2 delay-10000">
        IA & IoT
      </p>
    </div>

    <Modal />
  </motion.div>

  {/* Photo à droite sur desktop */}
  {!isMobile && (
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative z-10">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="Photo Andy F"
        className="w-64 h-64 rounded-full shadow-lg animate-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  )}
</section>



      {/* À propos */}
<section id="about" className="h-screen flex items-center justify-center bg-gray-200 text-gray-900 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* Gauche : Photo */}
    <div className="flex-1 flex justify-center md:justify-start">
      <img
        src="/photo3.png"
        alt="Ma photo"
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
      />
    </div>

    {/* Droite : Informations et tableau de bord */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-4xl font-semibold mb-4">About</h2>
      <p className="max-w-xl mb-6 text-gray-700">
I believe technology should be intuitive, elegant, and alive — from intelligent automation to responsive design.
Each line of code I write is a step toward a smarter, more connected world.
      </p>
{/* Informations personnelles */}
{/* Informations personnelles alignées */}
<div className="mb-6 max-w-md mx-auto md:mx-0 space-y-2">
  <div className="grid grid-cols-[max-content_1fr] gap-x-2">
    <span className="font-bold underline">Name:</span>
    <span className="text-blue-500">Andy Faneva Hasintsoa ANDRIANAINA</span>
  </div>
  <div className="grid grid-cols-[max-content_1fr] gap-x-2">
    <span className="font-bold underline">Date of birth:</span>
    <span className="text-blue-500">September 19, 2004</span>
  </div>
  <div className="grid grid-cols-[max-content_1fr] gap-x-2">
    <span className="font-bold underline">Adresse:</span>
    <span className="text-blue-500">Tsiadana, Antananarivo, Madagascar</span>
  </div>
  <div className="grid grid-cols-[max-content_1fr] gap-x-2">
    <span className="font-bold underline">Email:</span>
    <span className="text-blue-500">fanevahasintsoa@gmail.com</span>
  </div>
  <div className="grid grid-cols-[max-content_1fr] gap-x-2">
    <span className="font-bold underline">Phone:</span>
    <span className="text-blue-500">+261 38 62 135 34</span>
  </div>
</div>

      {/* Petit tableau de bord */}
{/* Petit tableau de bord */}
<div className="flex gap-4 overflow-x-auto justify-center">
  <div className="flex-shrink-0 bg-blue-100 text-blue-900 p-4 rounded shadow text-center">
    <p className="text-xl font-bold">9+</p>
    <p className="text-sm">Total Projects</p>
  </div>
  <div className="flex-shrink-0 bg-green-100 text-green-900 p-4 rounded shadow text-center">
    <p className="text-xl font-bold">4</p>
    <p className="text-sm">Certificats</p>
  </div>
  <div className="flex-shrink-0 bg-purple-100 text-purple-900 p-4 rounded shadow text-center">
    <p className="text-xl font-bold">2</p>
    <p className="text-sm">Years of experience</p>
  </div>
</div>
    </div>
  </div>
</section>

 {/* Skills */}
   <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-700 to-blue-500 text-gray-100 py-16 px-6"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4">Skills</h2>
        <p className="text-gray-300">
          A glimpse of my technical strengths and creative abilities.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <motion.div
                className={`${skill.color} h-4 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <p className="mt-2 text-sm text-gray-300">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>

<section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-start bg-blue-900 text-gray-100 py-16 px-4"
    >
      {/* --- Titre --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4">Portfolio</h2>
        <p className="text-gray-300">
          Welcome to my digital world — where ideas turn into vibrant, interactive creations.
        </p>
      </div>

      {/* --- Tabs --- */}
      <div className="flex gap-4 mb-8 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-white/40 text-blue-900 shadow-inner"
                : "text-white hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Contenu --- */}
      <div className="w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`
              grid gap-6
              ${
                activeTab === "projets"
                  ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : activeTab === "certificats"
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                  : "grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6"
              }
            `}
          >
            {projectsData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                className={`${
                  activeTab === "autres"
                    ? "p-0 bg-transparent shadow-none"
                    : "bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow flex flex-col"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={
                  activeTab === "certificats"
                    ? () => setSelectedImage(item.image)
                    : undefined
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover rounded-xl ${
                    activeTab === "autres"
                      ? "h-0"
                      : activeTab === "certificats"
                      ? "h-32 cursor-pointer"
                      : "h-48 mb-4"
                  }`}
                />

                {/* --- Projets --- */}
                {activeTab === "projets" && (
                  <>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 mb-2">{item.description}</p>
                    <p className="text-gray-400 text-sm mb-4">📅 {item.date}</p>

                    <div className=" flex justify-between ">
  <a
    href={item.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
  >
  </a>
  <a
    href={item.link}
    className="flex items-center justify-center bg-blue-500/30 backdrop-blur-md border border-white/20 text-white w-8 h-8 rounded-full hover:bg-blue-500/50 transition"
  >
   <ArrowTopRightOnSquareIcon className="w-4 h-4" />
  </a>
</div>

                  </>
                )}

                {/* --- Certificats --- */}
                {activeTab === "certificats" && (
                  <>
                    <h3 className="text-base font-semibold mt-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </>
                )}

                {/* --- Autres (tech stack) --- */}
                {activeTab === "autres" && (
                  <div className="flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 object-contain rounded-full"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Modal Image plein écran --- */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="relative max-w-3xl w-11/12">
                <img
                  src={selectedImage}
                  alt="certificat"
                  className="rounded-2xl shadow-2xl w-full h-auto object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full shadow-md"
                >
                  ✖
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>



 <section
      id="service"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-700 to-blue-500 text-gray-100 py-20 px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-12 text-center"
      >
        My Services
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveCard(activeCard === service.id ? null : service.id)
            }
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className={`w-full h-56 object-cover transition-all duration-500 ${
                activeCard === service.id ? "opacity-30 blur-sm" : "opacity-100"
              }`}
            />

            {/* Title */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-center">
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>

            {/* Description (appears on click) */}
            {activeCard === service.id && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center bg-black/70 text-center p-4"
              >
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
      {/* Contact */}
  <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-gray-100 py-16 px-8"
    >
      {/* Left: Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Send Me a Message</h2>

        <div>
          <label className="block text-sm mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none text-white placeholder-gray-300"
            placeholder="Andy"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none text-white placeholder-gray-300"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none text-white placeholder-gray-300"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-lg"
        >
          Send Message
        </motion.button>

        {status && (
          <p className="text-center text-sm mt-4 text-blue-200 animate-pulse">{status}</p>
        )}
      </motion.form>

      {/* Right: Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left max-w-md"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

        <div className="space-y-4 text-gray-200">
          <p className="flex items-center justify-center md:justify-start gap-3">
            <Mail className="w-5 h-5 text-blue-300" /> fanevahasintsoa@gmail.com
          </p>
           <p className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="w-5 h-5 text-blue-300" /> +261386213534
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="w-5 h-5 text-blue-300" /> Tsiadana, Antananarivo, Madagascar
          </p>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </motion.div>
    </section>
    </main>
  );
}
