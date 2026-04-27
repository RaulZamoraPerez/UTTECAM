import { useState, useEffect, useMemo } from "react";
import { Download, Calendar, ArrowLeft, FileText, ImageIcon, RotateCcw, AlertTriangle } from "lucide-react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { useCalendarios } from "@/hooks/useCalendarios";
import { getCalendarioFileUrl } from "@/services/calendario.service";
import { Spinner } from "@/components/Spinner";

export default function Calendario() {
  const { calendarios, loading, error, refetch } = useCalendarios();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Seleccionar el más reciente por defecto al cargar los datos
  useEffect(() => {
    if (calendarios.length > 0 && selectedId === null) {
      setSelectedId(calendarios[0].id);
    }
  }, [calendarios, selectedId]);

  const activeCalendar = useMemo(() => {
    if (calendarios.length === 0) return null;
    return calendarios.find(c => c.id === selectedId) || calendarios[0];
  }, [calendarios, selectedId]);

  const handleDownload = () => {
    if (!activeCalendar) return;
    toast.success("¡Calendario listo para descargar!");
  };

  if (loading && calendarios.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Spinner text="Cargando calendarios institucionales..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 max-w-md text-center border border-red-50"
        >
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Ops! Algo salió mal</h2>
          <p className="text-slate-500 text-sm mb-6">{error}</p>
          <button 
            onClick={() => refetch()}
            className="flex items-center justify-center gap-2 w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Reintentar
          </button>
        </motion.div>
      </div>
    );
  }

  if (calendarios.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6 text-slate-300">
            <Calendar className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">No hay calendarios publicados</h1>
          <p className="text-slate-500 max-w-sm">
            Pronto publicaremos el calendario de actividades para el próximo ciclo escolar.
          </p>
        </motion.div>
      </div>
    );
  }

  const isPDF = activeCalendar?.archivo.toLowerCase().endsWith(".pdf");
  const fileUrl = getCalendarioFileUrl(activeCalendar?.archivo || "");

  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-none mb-2">
              Calendario <span className="text-orange-500">Académico</span>
            </h1>
            <p className="text-slate-500 font-medium">Ciclo Escolar Vigente y Actividades</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <a
              href={fileUrl}
              download
              onClick={handleDownload}
              className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-teal-500/20 active:scale-95"
            >
              Descargar {isPDF ? "PDF" : "Imagen"}
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Calendar Selection (if multiple) */}
        {calendarios.length > 1 && (
          <div className="mb-8 flex flex-wrap justify-center md:justify-start gap-2">
            {calendarios.map((cal) => (
              <button
                key={cal.id}
                onClick={() => {
                  if (selectedId !== cal.id) {
                    setIframeLoading(true);
                    setSelectedId(cal.id);
                  }
                }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                  selectedId === cal.id 
                  ? "bg-slate-800 border-slate-800 text-white shadow-md shadow-slate-900/10" 
                  : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                }`}
              >
                {cal.titulo}
              </button>
            ))}
          </div>
        )}

        {/* Viewport Container */}
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-slate-200 border border-slate-100 ring-1 ring-slate-900/5">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCalendar?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full min-h-[60vh] md:min-h-[85vh] flex items-center justify-center bg-slate-100/30"
            >
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/60 backdrop-blur-sm">
                  <div className="w-12 h-12 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin mb-4" />
                  <p className="text-slate-500 text-sm font-bold animate-pulse uppercase tracking-widest">
                    Previsualizando {activeCalendar?.titulo}...
                  </p>
                </div>
              )}

              {isPDF ? (
                <iframe
                  src={`${fileUrl}#toolbar=0&view=FitH`}
                  className="w-full h-[60vh] md:h-[85vh] border-none"
                  title="Calendario PDF"
                  onLoad={() => setIframeLoading(false)}
                />
              ) : (
                <div className="p-4 md:p-8 w-full h-full flex items-center justify-center min-h-[60vh] md:min-h-[85vh]">
                  <img 
                    src={fileUrl} 
                    alt={activeCalendar?.titulo}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
                    onLoad={() => setIframeLoading(false)}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Empty spacer to preserve rounded corners and container logic if needed */}
        </div>

      </div>
    </div>
  );
}
