import { Users } from "lucide-react";

export default function VinculacionBanner() {
  return (
    <div className="min-h-[40vh] w-full bg-gradient-to-b from-[#F5F9F8] to-white flex flex-col items-center justify-center py-6 px-0">
      <h1 className="text-2xl md:text-3xl font-bold text-[#0A9782] mb-4 text-center drop-shadow flex items-center gap-2">
        <Users className="inline-block h-7 w-7 text-[#0A9782]" />
        Vinculación UTTECAM
      </h1>
      <div className="w-full flex justify-center">
        <img
          src="/vinculacion/BANNER VINCULACIÓN 2025_1.jpg"
          alt="Banner Vinculación UTTECAM"
          className="w-7/8 h-auto object-cover object-center rounded-xl shadow-lg border border-[#0A9782]/20"
          style={{ background: '#fff' }}
        />
      </div>
    </div>
  );
}
