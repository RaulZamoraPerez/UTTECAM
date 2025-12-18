
import datosGaceta from "@/data/gaceta.data";
import TablaDocumentosReutilizable2 from '@/components/tablaDocumentosReutilizable2';

 const Gaceta = () => {
  return (
    <TablaDocumentosReutilizable2
   
      secciones={datosGaceta}
      titulo="Gaceta"
      descripcion="Explora las gacetas de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default Gaceta;