import { motion } from "framer-motion";

interface Resource {
  id: string;
  category: string;
  title: string;
  summary: string;
  source: string;
  image: string;
}

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <img
        className="w-full h-40 object-cover"
        src={resource.image}
        alt={resource.title}
      
      />
      <div className="p-5">
        <p className="text-sm font-semibold text-pink-500">{resource.category}</p>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{resource.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{resource.summary}</p>
        <a
          href={resource.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm font-medium mt-4 inline-block"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
