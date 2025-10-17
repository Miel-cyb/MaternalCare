import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resources from "../data/resources.json";
import ResourceCard from "../components/ResourceCard";
import { LuSearch } from "react-icons/lu";

const categories = [
  "All",
  "Pregnancy",
  "Baby Development",
  "Postpartum Recovery",
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    let resourcesList = resources;

    // Filter by category
    if (activeCategory !== "All") {
      resourcesList = resourcesList.filter(
        (r) => r.category === activeCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      resourcesList = resourcesList.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return resourcesList;
  }, [searchTerm, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Educational Resources
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Explore articles and guides on pregnancy, baby development, and postpartum recovery.
        </p>
      </div>

      {/* Search and Filter UI */}
      <div className="mb-10">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full ${ 
                activeCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </AnimatePresence>
        </motion.div>

        {filteredResources.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
                <p>No resources found. Try adjusting your search or filters.</p>
            </div>
        )}

    </div>
  );
};

export default Resources;
