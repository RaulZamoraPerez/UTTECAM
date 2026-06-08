import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import ModelDetails from "./ModelDetails"
import ModelCard from "./ModelCard"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
}

const EducationalModels = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#0A9782" }}>
            Modelos educativos
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conoce nuestro enfoque educativo diseñado para formar profesionistas competitivos.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants}>
            <ModelDetails />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end rounded-2xl"
          >
            <ModelCard />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EducationalModels
