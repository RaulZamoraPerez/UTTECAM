import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import datosConvocatoriaTitulo from "@/data/convocatoriaTitulo.data";

const ConvocatoriaTitulo = () => {
  return (
    <TablaDocumentosReutilizable
      nextUrl="-CONVOCATORIA-TITULO"
      secciones={datosConvocatoriaTitulo}
      titulo="Convocatoria a trámite de título profesional"
      descripcion="Selecciona la convocatoria que deseas consultar y visualiza el PDF."
    />
  );
};

export default ConvocatoriaTitulo;
