import { useState } from "react";
import { motion } from "framer-motion";
import mythList from "../data/pregnancyMyth.json";
import { LuLightbulb, LuBadgeCheck } from "react-icons/lu";

type Myth = {
  id: number;
  myth: string;
  fact: string;
  source: string;
};

const MythCard = ({ myth }: { myth: Myth }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      {/* Front Side (Myth) */}
      <motion.div
        className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border-2 border-rose-200"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <LuLightbulb className="text-rose-500 text-4xl mb-3" />
        <h3 className="font-bold text-lg text-rose-800">Myth</h3>
        <p className="mt-2 text-gray-600">{myth.myth}</p>
      </motion.div>

      {/* Back Side (Fact) */}
      <motion.div
        className="absolute w-full h-full bg-emerald-50 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border-2 border-emerald-200"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <LuBadgeCheck className="text-emerald-500 text-4xl mb-3" />
        <h3 className="font-bold text-lg text-emerald-800">Fact</h3>
        <p className="mt-2 text-gray-700">{myth.fact}</p>
        <a
          href={myth.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs mt-4 text-indigo-600 font-medium underline"
        >
          Source
        </a>
      </motion.div>
    </motion.div>
  );
};

const Myths = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 py-12" id="myths">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Debunking Pregnancy Myths
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mythList.map((myth) => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </div>
    </section>
  );
};

export default Myths;
