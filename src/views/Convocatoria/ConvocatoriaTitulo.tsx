
import datosConvocatoriaTitulo from "@/data/convocatoriaTitulo.data";

import TablaDocumentosReutilizable2 from '@/components/tablaDocumentosReutilizable2';

const ConvocatoriaTitulo = () => {
  return (
    <TablaDocumentosReutilizable2
      secciones={datosConvocatoriaTitulo}
      titulo="Convocatoria a trámite de título profesional"
      descripcion="Selecciona la convocatoria que deseas consultar y visualiza el PDF."
    />
  );
};

export default ConvocatoriaTitulo;
