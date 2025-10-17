import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { LuRefreshCcw, LuBaby } from "react-icons/lu";
import pregnancyData from "../data/pregnancyData.json";
import Appointments from "./Appointments";

const WeeklyInfo = () => {
  const [week, setWeek] = useState<number | "">("");
  const [data, setData] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  const handleWeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (rawValue === "") return setWeek("");

    let value = Number(rawValue);
    if (value < 1) value = 1;
    if (value > 40) value = 40;
    setWeek(value);
  };

  const fetchData = () => {
    if (week === "" || week === null) return;
    const validWeek = Number(week);
    const found = pregnancyData.find((item) => item.week === validWeek);
    setData(found || null);
    setSearched(true);
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-4 md:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Input Section */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-6 max-w-md mx-auto">
        <p className="font-semibold text-gray-800 text-lg mb-2">
          Enter your pregnancy week
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <input
            value={week}
            onChange={handleWeekChange}
            type="number"
            max={40}
            min={1}
            placeholder="1 wk(s)"
            className="w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-300"
          />
          <button
            onClick={fetchData}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-white font-semibold bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <LuRefreshCcw className="w-4 h-4" />
            Get Info
          </button>
        </div>
      </div>

      {/* Display Section */}
      <div className="mt-10">
        {!searched ? (
          <div className="text-center text-gray-500">
            <LuBaby className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-xl font-medium">
              Enter your pregnancy week to get started
            </h2>
            <p className="text-gray-500 mt-2">
              Get evidence-based info from trusted medical sources
            </p>
          </div>
        ) : data ? (
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Week title */}
            <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
              Week {data.week}: {data.title}
            </h2>

            {/* Baby’s Development */}
            <motion.div
              className="bg-pink-100 rounded-xl p-4 text-left shadow"
              variants={sectionVariants}
            >
              <h3 className="font-semibold text-pink-800 mb-1">
                Baby’s Development
              </h3>
              <p className="text-gray-700">{data.babyDevelopment}</p>
            </motion.div>

            {/* For You, Mama */}
            <motion.div
              className="bg-purple-100 rounded-xl p-4 text-left shadow"
              variants={sectionVariants}
            >
              <h3 className="font-semibold text-purple-800 mb-1">
                For You, Mama
              </h3>
              <p className="text-gray-700">{data.mamaTips}</p>
            </motion.div>

            {/* Nutrition */}
            <motion.div
              className="bg-green-100 rounded-xl p-4 text-left shadow"
              variants={sectionVariants}
            >
              <h3 className="font-semibold text-green-800 mb-1">
                Nutrition Focus
              </h3>
              <p className="text-gray-700">{data.nutrition}</p>
            </motion.div>

            {/* Important */}
            {data.warning && (
              <motion.div
                className="bg-yellow-100 rounded-xl p-4 text-left shadow border-l-4 border-yellow-400"
                variants={sectionVariants}
              >
                <h3 className="font-semibold text-yellow-800 mb-1 flex items-center gap-1">
                  ⚠️ Important
                </h3>
                <p className="text-gray-700">{data.warning}</p>
              </motion.div>
            )}
             <motion.div
                className="bg-gray-100 rounded-xl p-4 text-left shadow mt-4"
                variants={sectionVariants}
              >
                <p className="text-xs text-gray-600">
                  Source:{" "}
                  <a
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {data.source}
                  </a>
                </p>
              </motion.div>
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-3 text-center">
            No data found for week {week}.
          </p>
        )}
      </div>
       <div className="mt-10">
          <Appointments />
        </div>
    </motion.div>
  );
};

export default WeeklyInfo;
