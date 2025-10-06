import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import mythList from "../data/pregnancyMyth.json";

// match your data type
type Myth = {
  id: number;
  myth: string;
  fact: string;
  img?: string; // optional if you have images
};

const MythsSlider = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-600">
        Pregnancy Myths vs Facts
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile waterfall
          768: { slidesPerView: 3 }, // tablets
          1024: { slidesPerView: 5 }, // desktop star layout
        }}
      >
        {mythList.map((myth: Myth) => (
          <SwiperSlide key={myth.id}>
            <div className="bg-rose-50 rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between h-full">
              {/* If you have an image */}
              {myth.img && (
                <img
                  src={myth.img}
                  alt={`Myth ${myth.id}`}
                  className="w-full h-40 object-contain mb-3"
                />
              )}

              <h3 className="font-semibold text-lg text-rose-700 text-center">
                {myth.myth}
              </h3>
              <p className="text-green-600 text-sm mt-2 text-center">
                ✅ {myth.fact}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MythsSlider;
