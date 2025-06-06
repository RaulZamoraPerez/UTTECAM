
export default function Error({children}: {children: React.ReactNode}) {
  return (
    <p className="text-center  my-4 bg-[#0A9782] p-2 text-white font-bold text-sm">
      {children}
    </p>
  )
}
