'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <button 
        onClick={() => setIsOpen(true)}
       className="flex mt-5 items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md">
                  Download CV
                  <ArrowDownIcon className="w-5 h-5 ml-2" />
                </button>

      {/* Fenêtre Modal */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay doux */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Contenu de la modal */}
      <motion.div
        initial={{ scale: 0.8, y: -30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: -30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed top-1/2 left-1/2 z-50 w-11/12 max-w-md bg-white rounded-2xl shadow-xl p-6 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Titre avec léger clignotement */}
        <motion.h2
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.9, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="text-2xl font-bold mb-4 text-center text-blue-700"
        >
          No CV
        </motion.h2>

        {/* Contenu avec léger mouvement */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, 0, 5, 0], opacity: [0, 1, 0.95, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          className="mb-6 text-gray-700 text-center"
        >
        No resume required — my work speaks for itself.
        </motion.p>

        {/* Bouton Close simple */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
          className="mx-auto block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Close
        </motion.button>
      </motion.div>
    </>
  )}
</AnimatePresence>



    </div>
  );
}
