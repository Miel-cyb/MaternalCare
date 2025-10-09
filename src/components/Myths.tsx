import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import mythList from "../data/pregnancyMyth.json"

type Myth = {
  id: number;
  myth: string;
  fact: string;
  source: string;
};

const getSourceName = (url: string) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const MythsSlider = () => {
  // Group myths into chunks of 5
  const chunkedMyths: Myth[][] = [];
  for (let i = 0; i < mythList.length; i += 5) {
    chunkedMyths.push(mythList.slice(i, i + 5));
  }

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 py-12 bg-gray-50 rounded-3xl shadow-sm">
      <h2 className="text-3xl font-extrabold text-center mb-14 text-rose-500 tracking-wide">
        Pregnancy Myths vs Facts
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={50}
        slidesPerView={1} // each slide shows 5 myths
      >
        {chunkedMyths.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            {/* Container: waterfall on mobile, star on desktop */}
            <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:space-y-0">
              {chunk.map((myth: Myth, index: number) => {
                // Star layout positions (desktop only)
                let starClasses = "";
                if (index === 0)
                  starClasses =
                    "lg:col-span-4 lg:col-start-5 lg:row-start-1"; // top center
                if (index === 1)
                  starClasses =
                    "lg:col-span-3 lg:col-start-2 lg:row-start-2"; // left middle
                if (index === 2)
                  starClasses =
                    "lg:col-span-3 lg:col-start-8 lg:row-start-2"; // right middle
                if (index === 3)
                  starClasses =
                    "lg:col-span-3 lg:col-start-1 lg:row-start-3"; // bottom left
                if (index === 4)
                  starClasses =
                    "lg:col-span-3 lg:col-start-9 lg:row-start-3"; // bottom right

                // Waterfall layout (mobile only)
                const waterfallClasses = `${
                  index % 2 === 0 ? "self-start" : "self-end"
                } ${index % 3 === 0 ? "max-w-sm" : index % 3 === 1 ? "max-w-md" : "max-w-lg"}`;

                return (
                  <div
                    key={myth.id}
                    className={`bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-100
                    ${waterfallClasses} ${starClasses}`}
                  >
                    <h3 className="font-semibold text-lg text-rose-600 text-center line-clamp-2">
                      {myth.myth}
                    </h3>
                    <p className="text-emerald-700 text-sm mt-3 text-center leading-relaxed line-clamp-3">
                      ✅ {myth.fact}
                    </p>
                    <p className="text-xs mt-4 text-center text-gray-500">
                      Source:{" "}
                      <a
                        href={myth.source}
                        className="text-indigo-600 font-medium underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getSourceName(myth.source)}
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MythsSlider;
