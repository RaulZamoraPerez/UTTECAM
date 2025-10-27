
export default function EducacionContinua() {
  return (
    <div className="min-h-[80vh] w-full bg-white flex flex-col items-center justify-center py-6 px-2">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0A9782] mb-4 text-center drop-shadow-lg flex items-center gap-3">
        Educación Continua
      </h1>
      <div className="w-full max-w-6xl flex-1 flex flex-col items-center justify-center">
        <iframe
          src="/vinculacion/eduacion continua/CATÁLOGO UTTECAM EDUCACIÓN CONTINUA 2025.pdf"
          title="Catálogo Educación Continua"
          className="w-full min-h-[70vh] h-[80vh] rounded-xl border border-[#0A9782]/20 shadow-lg"
          style={{ background: '#fff' }}
        />
        <div className="mt-4">
          <a
            href="/vinculacion/eduacion continua/CATÁLOGO UTTECAM EDUCACIÓN CONTINUA 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A9782] text-white font-semibold rounded-lg shadow hover:bg-[#087a6a] transition-colors text-lg"
          >
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
  );
}
