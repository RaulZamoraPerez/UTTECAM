import ProgramCard from "./ProgramCard"
import type { Program } from "../types/Program"

interface ProgramListProps {
  programs: Program[]
}

const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  )
}

export default ProgramList
