import  { useEffect, type JSX } from "react";
import { motion } from "framer-motion";
import nutritionImage from '../assets/images/nutrition.jpg'
import Faq from "../components/Faq";





const heroImg = nutritionImage

// Meal gallery sample images (Unsplash)
const mealImages = [
  "https://images.unsplash.com/photo-1543353071-087092ec393f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1540136277-1f6fe7a5b59d?auto=format&fit=crop&w=1000&q=80",
];

// Verified sources (display hostnames automatically)
const SOURCES = {
  mayo: "https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy-nutrition/art-20045082",
  nichd: "https://www.nichd.nih.gov/health/topics/pregnancy/conditioninfo/diet",
  who: "https://www.who.int/health-topics/maternal-health#tab=tab_1",
  cleveland: "https://health.clevelandclinic.org/what-to-eat-after-delivery/",
  hopkins: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/nutrition-after-childbirth",
  nhs: "https://www.nhs.uk/pregnancy/keeping-well/vitamins-minerals/",
  acog: "https://www.acog.org/womens-health/faqs/nutrition-during-pregnancy",
};

const getHost = (url: string) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

export default function NutritionGuide(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50">
        {/* overlay curve */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-36 md:h-44" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,160C672,160,768,160,864,160C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-rose-800 mb-4 leading-tight">
                Nutrition & Postpartum Recovery
              </h1>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Practical, evidence-backed guidance on what to eat before, during, and after pregnancy — prepared for first-time and expectant mothers.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={SOURCES.mayo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition"
                >
                  Read Mayo Clinic
                </a>
                <a
                  href={SOURCES.acog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-rose-200 text-rose-700 rounded-lg hover:bg-rose-50 transition"
                >
                  ACOG Guidance
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img src={heroImg} alt="Black mother holding baby during mealtime" className="object-cover w-full h-full" />
                {/* subtle overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESSENTIAL NUTRIENTS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-rose-800 mb-6">Essential Nutrients</h2>
        <p className="text-slate-700 mb-6 max-w-3xl">
          Key nutrients support baby's growth and the mother's health. Below are the essentials, why they matter, and foods that contain them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Folate */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Folate (Folic Acid)</h3>
            <p className="text-sm text-slate-700 mb-2">Helps prevent neural tube defects; crucial before conception and in early pregnancy.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: leafy greens, legumes, fortified grains</p>
            <a href={SOURCES.nichd} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.nichd)}
            </a>
          </article>

          {/* Iron */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Iron</h3>
            <p className="text-sm text-slate-700 mb-2">Supports increased maternal blood volume and prevents anemia.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: red meat, beans, spinach</p>
            <a href={SOURCES.who} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.who)}
            </a>
          </article>

          {/* Calcium */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Calcium</h3>
            <p className="text-sm text-slate-700 mb-2">Important for baby’s bones and teeth and mother’s bone health.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: milk, yogurt, leafy greens</p>
            <a href={SOURCES.nhs} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.nhs)}
            </a>
          </article>

          {/* Omega-3 */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Omega-3 (DHA/EPA)</h3>
            <p className="text-sm text-slate-700 mb-2">Supports fetal brain and eye development; supports maternal mood.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: salmon, flaxseed, walnuts</p>
            <a href={SOURCES.who} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.who)}
            </a>
          </article>

          {/* Protein */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Protein</h3>
            <p className="text-sm text-slate-700 mb-2">Needed for fetal growth and maternal tissue repair.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: eggs, chicken, legumes</p>
            <a href={SOURCES.mayo} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.mayo)}
            </a>
          </article>

          {/* Iodine */}
          <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-rose-700 mb-2">Iodine</h3>
            <p className="text-sm text-slate-700 mb-2">Supports thyroid function for neurological development.</p>
            <p className="text-xs text-slate-600 mb-3">Foods: iodized salt, seafood, dairy</p>
            <a href={SOURCES.who} className="text-indigo-600 text-sm underline" target="_blank" rel="noopener noreferrer">
              {getHost(SOURCES.who)}
            </a>
          </article>
        </div>
      </section>

      {/* TRIMESTER GUIDANCE */}
      <section className="bg-rose-50 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-rose-800 mb-6">Trimester Meal Guidance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "First Trimester",
                tips: [
                  "Small, frequent meals help with nausea.",
                  "Include bland proteins and hydrating fruits.",
                  "Take folic acid (per provider guidance).",
                ],
              },
              {
                title: "Second Trimester",
                tips: [
                  "Increase iron-rich foods and protein.",
                  "Focus on calcium and fiber to support growth and digestion.",
                  "Balanced meals with whole grains and veggies.",
                ],
              },
              {
                title: "Third Trimester",
                tips: [
                  "Frequent small meals to reduce heartburn.",
                  "Prioritize hydration and easily digested proteins.",
                  "Keep snacks rich in healthy fats and fiber.",
                ],
              },
            ].map((seg, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-semibold text-rose-800 mb-3">{seg.title}</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  {seg.tips.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MEAL GALLERY */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-rose-800 mb-6">Healthy Meal Ideas</h2>
          <p className="text-slate-700 mb-6 max-w-2xl">Browse balanced meal images for inspiration — click an image to open the full photo.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mealImages.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden shadow hover:scale-105 transform transition">
                <img src={url} alt={`Meal ${i + 1}`} className="w-full h-28 object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE MEAL PLAN (table) */}
      <section className="py-12 bg-rose-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-rose-800 mb-4">Sample Weekly Meal Plan</h2>

          <div className="overflow-auto rounded-lg shadow">
            <table className="w-full bg-white table-auto">
              <thead className="bg-rose-100">
                <tr>
                  <th className="p-3 text-left">Day</th>
                  <th className="p-3 text-left">Breakfast</th>
                  <th className="p-3 text-left">Lunch</th>
                  <th className="p-3 text-left">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { d: "Mon", b: "Oatmeal + banana", l: "Grilled chicken salad", dn: "Steamed fish + veg" },
                  { d: "Tue", b: "Yogurt + berries", l: "Brown rice + beans", dn: "Light stew + plantain" },
                  { d: "Wed", b: "Eggs + avocado", l: "Quinoa + veg", dn: "Vegetable soup" },
                  { d: "Thu", b: "Smoothie", l: "Turkey wrap", dn: "Stir-fry + rice" },
                  { d: "Fri", b: "Whole grain cereal", l: "Tilapia + salad", dn: "Pasta + spinach" },
                  { d: "Sat", b: "Pancakes + fruit", l: "Lentils + rice", dn: "Light soup" },
                  { d: "Sun", b: "Beans porridge", l: "Chicken + greens", dn: "Rice + vegetable stew" },
                ].map((row, i) => (
                  <tr key={i} className="border-t last:border-b">
                    <td className="p-3 font-semibold">{row.d}</td>
                    <td className="p-3">{row.b}</td>
                    <td className="p-3">{row.l}</td>
                    <td className="p-3">{row.dn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-right">
            <a href="#" className="inline-block px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">Download PDF Plan</a>
          </div>
        </div>
      </section>

      {/* POSTPARTUM NUTRITION & RECOVERY */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-rose-800 mb-6">Postpartum Nutrition & Recovery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-semibold text-rose-800 mb-2">Nutrition After Birth</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Increase protein & iron to support tissue repair.</li>
                  <li>Hydrate well; breastfeeding increases fluid needs.</li>
                  <li>Include healthy fats (omega-3s) to support mood.</li>
                  <li>Continue prenatal vitamins if your provider recommends.</li>
                </ul>
                <div className="mt-3">
                  <a href={SOURCES.cleveland} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-sm">
                    {getHost(SOURCES.cleveland)}
                  </a>
                </div>
              </article>

              <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-semibold text-rose-800 mb-2">Recovery Tips</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Gentle movement (short walks) as your provider allows.</li>
                  <li>Pelvic floor exercises and guided postpartum rehab if needed.</li>
                  <li>Prioritize rest and accept help with meals and chores.</li>
                </ul>
                <div className="mt-3">
                  <a href={SOURCES.hopkins} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-sm">
                    {getHost(SOURCES.hopkins)}
                  </a>
                </div>
              </article>
            </div>

            {/* Video */}
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                {/* Correct YouTube embed */}
                <iframe
                  src="https://www.youtube.com/embed/dHdh3eNZnW8"
                  title="Postpartum recovery"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <p className="text-sm text-slate-600">
                Watch a short guide on postpartum recovery — follow your provider's advice first and use these as supplemental tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="py-12 bg-rose-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h4 className="font-semibold text-rose-800 mb-2">Iron</h4>
            <p className="text-sm text-slate-700">Essential for preventing anemia — include beans, red meat, and leafy greens.</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h4 className="font-semibold text-rose-800 mb-2">Hydration</h4>
            <p className="text-sm text-slate-700">Water supports blood volume and milk production; sip throughout the day.</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h4 className="font-semibold text-rose-800 mb-2">Mental Recovery</h4>
            <p className="text-sm text-slate-700">Ask for help and speak to a provider if you feel overwhelmed or low.</p>
          </div>
        </div>
      </section>
      <Faq />

      {/* FOOTER / DISCLAIMER */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p>
            This information is educational and not a substitute for medical advice. Always consult a healthcare professional for personalized guidance.
          </p>
          <div className="mt-4 text-xs text-slate-500 space-x-3">
            <a href={SOURCES.mayo} target="_blank" rel="noopener noreferrer" className="hover:underline">{getHost(SOURCES.mayo)}</a>
            <a href={SOURCES.acog} target="_blank" rel="noopener noreferrer" className="hover:underline">{getHost(SOURCES.acog)}</a>
            <a href={SOURCES.hopkins} target="_blank" rel="noopener noreferrer" className="hover:underline">{getHost(SOURCES.hopkins)}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
