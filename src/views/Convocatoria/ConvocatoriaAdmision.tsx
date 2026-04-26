// import { useEffect, useState } from 'react';
// import { obtenerProcesoAdmision } from '../../services/procesoAdmision.service';
// import type { ProcesoAdmisionResponse } from '../../services/procesoAdmision.service';
// import { Spinner } from '../../components/Spinner';
import { useState, useEffect, memo } from 'react';
import {  ExternalLink, FileText, Info, GraduationCap, ChevronRight, MousePointerClick, CheckCircle2 } from 'lucide-react';

const ADMISSION_RESOURCES = [
  {
    name: "Órdenes de Pago",
    description: "Referencia en el portal de Finanzas Puebla.",
    url: "https://rl.puebla.gob.mx/",
    type: "link",
    icon: ExternalLink,
  },
  {
    name: "Tutorial: Orden de Cobro",
    description: "Manual para generar tu referencia.",
    url: "/convocatoriaAdmision/TUTORIAL. ORDEN DE PAGO.pdf",
    type: "file",
    icon: FileText,
  },
  {
    name: "Registro “Mi Escuela”",
    description: "Captura de datos institucional UTTECAM.",
    url: "http://187.217.125.214/uttecam/aspirantes_registro_uttecam_tsu2024.asp",
    type: "link",
    icon: GraduationCap,
  },
  {
    name: "Tutorial: Documentos",
    description: "Guía para el escaneo y carga.",
    url: "/convocatoriaAdmision/TUTORIAL. DOCUMENTOS.pdf",
    type: "file",
    icon: FileText,
  },
  {
    name: "Examen Diagnóstico",
    description: "Registro en plataforma xbingreso.",
    url: "https://xbingreso.com/Entrar/UTTECAM",
    type: "link",
    icon: MousePointerClick,
  },
  {
    name: "Consulta de NSS",
    description: "Número de Seguridad Social IMSS.",
    url: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/asignacionNSS",
    type: "link",
    icon: Info,
  }
];

const ResourceStep = memo(({ item, index, isLast }: { item: typeof ADMISSION_RESOURCES[0], index: number, isLast: boolean }) => (
  <div className="relative flex gap-3">
    {!isLast && (
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-slate-100" />
    )}
    
    <div className="flex-shrink-0 relative">
      <div className="w-8 h-8 rounded-full bg-white border-2 border-[#0A9782] text-[#0A9782] flex items-center justify-center font-bold text-xs z-10 relative">
        {index + 1}
      </div>
    </div>

    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 pb-4 group"
    >
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm group-hover:border-[#0A9782]/30 group-hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="text-slate-700 font-bold text-[13px] group-hover:text-[#0A9782] transition-colors leading-none">
            {item.name}
          </h3>
          <item.icon size={12} className="text-slate-300 group-hover:text-[#D1672A]" />
        </div>
        <p className="text-slate-500 text-[10px] leading-tight mb-2">
          {item.description}
        </p>
        <div className="flex items-center gap-1 text-[9px] font-bold text-[#0A9782] uppercase tracking-wider">
          <span>{item.type === 'file' ? 'Documento' : 'Enlace'}</span>
          <ChevronRight size={10} strokeWidth={3} />
        </div>
      </div>
    </a>
  </div>
));

export default function ConvocatoriaAdmision() {
  const [loadPdf, setLoadPdf] = useState(false);
  const mainPdfUrl = "/convocatoriaAdmision/PROCESO DE ADMISIÓN 2026 UTTECAM .pdf";

  useEffect(() => {
    const timer = setTimeout(() => setLoadPdf(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header Section Centrado y Compacto */}
      <div className="bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            <div className="max-w-xl text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 text-[#0A9782] text-[9px] font-bold mb-4 uppercase tracking-[0.15em] border border-emerald-100/50">
                <CheckCircle2 size={10} />
                <span>Admisión 2026 - 2027</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 tracking-tighter leading-[0.95]">
                TU TRABAJO <br />
                <span className="text-[#0A9782]">EMPIEZA AQUÍ</span>
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-lg font-medium leading-relaxed mb-6">
                Sigue los pasos oficiales para tu ingreso a la UTTECAM.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 <a href="#proceso" className="px-6 py-2.5 bg-[#D1672A] text-white rounded-lg font-bold text-xs shadow-lg shadow-orange-100 hover:brightness-105 transition-all">Ver Proceso</a>
                 <a href={mainPdfUrl} download className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-xs hover:bg-slate-50 transition-all">Descargar PDF</a>
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-[#0A9782]/5 rounded-full blur-[60px]" />
              <img 
                src="/convocatoriaAdmision/motocle.png" 
                alt="Motocle" 
                className="w-40 md:w-52 lg:w-60 h-auto animate-float relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="proceso" className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Lado PDF: 7/12 */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-700 uppercase tracking-tight flex items-center gap-2">
              <div className="w-1 h-6 bg-[#D1672A] rounded-full" />
              Convocatoria Oficial
            </h2>
            
            <div className="aspect-[3/4] lg:aspect-auto lg:h-[800px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-100 relative">
              {!loadPdf ? (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                  <div className="w-8 h-8 border-4 border-[#0A9782]/10 border-t-[#0A9782] rounded-full animate-spin"></div>
                </div>
              ) : (
                <iframe 
                  src={encodeURI(mainPdfUrl)} 
                  className="w-full h-full border-none"
                  title="Convocatoria 2026"
                />
              )}
            </div>
          </div>

          {/* Lado Recursos: 4/12 (dejando espacio) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-700 uppercase tracking-tight flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0A9782] rounded-full" />
              Pasos a Seguir
            </h2>

            <div className="space-y-0.5">
              {ADMISSION_RESOURCES.map((item, index) => (
                <ResourceStep 
                  key={item.name} 
                  item={item} 
                  index={index} 
                  isLast={index === ADMISSION_RESOURCES.length - 1} 
                />
              ))}
            </div>

            <div className="mt-2 p-4 bg-white border border-slate-100 rounded-xl flex gap-3 items-start shadow-sm outline outline-1 outline-blue-50/30">
              <div className="bg-slate-50 p-1.5 rounded-lg text-blue-500">
                <Info size={16} />
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-[12px] mb-0.5">Apoyo al Aspirante</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed font-medium">
                  Dudas técnicas: <span className="text-[#0A9782] font-bold">249-129-69-11</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Posgrado al final */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 uppercase tracking-tighter">
            ADMISIÓN <span className="text-[#D1672A]">MAESTRÍA</span>
          </h3>
          <div className="inline-block px-10 py-3 bg-[#D1672A] text-white rounded-xl font-black text-xl uppercase italic shadow-lg shadow-orange-100">
            ¡Próximamente!
          </div>
          <p className="mt-6 text-slate-500 text-sm font-medium italic">
            El nuevo proceso de posgrado será anunciado a través de nuestras redes oficiales.
          </p>
        </div>
      </div>
    </div>
  );
}




