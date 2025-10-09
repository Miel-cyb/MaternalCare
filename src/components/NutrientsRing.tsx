import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Doctor from "../assets/images/Doctor.png";

interface Nutrient {
  id: string;
  label: string;
  videoUrl: string;
  color: string;
}

const nutrients: Nutrient[] = [
  { id: "folate", label: "Folate", videoUrl: "https://www.youtube.com/embed/A0p8aRjUu-8", color: "#FAD0C4" },
  { id: "iron", label: "Iron", videoUrl: "https://www.youtube.com/embed/NXQbQhZ0Q5U", color: "#F8B195" },
  { id: "calcium", label: "Calcium", videoUrl: "https://www.youtube.com/embed/pdNn5jktWlI", color: "#F67280" },
  { id: "omega3", label: "Omega-3", videoUrl: "https://www.youtube.com/embed/S7fP3FHZpP4", color: "#C06C84" },
  { id: "protein", label: "Protein", videoUrl: "https://www.youtube.com/embed/JdghT4O0h7c", color: "#6C5B7B" },
  { id: "iodine", label: "Iodine", videoUrl: "https://www.youtube.com/embed/R5R8nP_3qgE", color: "#355C7D" },
];

export default function NutrientsRing() {
  const [open, setOpen] = useState(false);
  const [selectedNutrient, setSelectedNutrient] = useState<Nutrient | null>(null);

  const openModal = (nutrient: Nutrient) => {
    setSelectedNutrient(nutrient);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedNutrient(null);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-16 mb-24 gap-10 md:gap-20 relative">
      {/* Doctor Image - Only on larger screens */}
      <div className="hidden md:flex justify-center items-center">
        <img
          src={Doctor}
          alt="Doctor pointing at nutrients"
          className="w-72 h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Nutrient Ring */}
      <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex justify-center items-center">
        {nutrients.map((nutrient, idx) => {
          const angle = (idx / nutrients.length) * 2 * Math.PI;
          const radius = 130; // smaller for mobile fit
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={nutrient.id}
              className="absolute flex justify-center items-center rounded-full text-center cursor-pointer shadow-md transition-all"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                width: "80px",
                height: "80px",
                backgroundColor: nutrient.color,
                zIndex: 5,
              }}
              whileHover={{ scale: 1.12 }}
              onClick={() => openModal(nutrient)}
            >
              <span className="text-white font-semibold text-sm px-2">{nutrient.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal */}
      <Dialog
        open={open}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      >
        <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          >
            ✕
          </button>
          {selectedNutrient && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">
                {selectedNutrient.label} — Pregnancy Nutrition
              </h3>
              <iframe
                src={selectedNutrient.videoUrl}
                title={selectedNutrient.label}
                width="100%"
                height="360"
                className="rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
