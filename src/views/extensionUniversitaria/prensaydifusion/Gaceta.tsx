import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import datosGaceta from "@/data/gaceta.data";

 const Gaceta = () => {
  return (
    <TablaDocumentosReutilizable
      nextUrl="-GACETA"
      secciones={datosGaceta}
      titulo="Gaceta"
      descripcion="Explora las gacetas de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default Gaceta;