import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import ProgramCard from "./ProgramCard"
import type { Program } from "../../types/Program"

interface ProgramListProps {
  programs: Program[]
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
}

const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
    >
      {programs.map((program) => (
        <motion.div
          key={program.id}
          variants={itemVariants}
          className="w-full flex justify-center"
        >
          <ProgramCard program={program} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProgramList
