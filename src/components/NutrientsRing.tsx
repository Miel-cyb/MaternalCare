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
  { id: "folate", label: "Folate", videoUrl: "https://www.youtube.com/embed/3gt2GlVUWYQ", color: "#FAD0C4" },
  { id: "iron", label: "Iron", videoUrl: "https://www.youtube.com/embed/kCB0hHBwpeA", color: "#F8B195" },
  { id: "calcium", label: "Calcium", videoUrl: "https://www.youtube.com/embed/1_9J1yemesQ", color: "#F67280" },
  { id: "omega3", label: "Omega-3", videoUrl: "https://www.youtube.com/embed/Jrg1IfsED8w", color: "#C06C84" },
  { id: "protein", label: "Protein", videoUrl: "https://www.youtube.com/embed/-DZoiFs9rd0", color: "#6C5B7B" },
  { id: "iodine", label: "Iodine", videoUrl: "https://www.youtube.com/embed/NfIikMZQD5w", color: "#355C7D" },
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
    <div className="flex flex-col sm:flex-row justify-center items-end  mb-24 gap-10 md:gap-20 relative ">
      {/* Doctor Image - Only on larger screens */}
      <div className="hidden sm:flex justify-center items-center">
        <img
          src={Doctor}
          alt="Doctor pointing at nutrients"
          className="w-[30rem] h-full object-contain drop-shadow-lg -mb-24"
        />
      </div>

      {/* Nutrient Ring */}
      <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex justify-center items-center">
        <motion.p
          className="absolute text-center text-gray-600 font-medium text-sm w-3/5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click on any circle to watch an expert's teachings
        </motion.p>
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow-presentation"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}