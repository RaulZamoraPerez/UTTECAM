import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import datosGaceta from "@/data/gaceta.data";

export const Gaceta = () => {
  return (
    <TablaDocumentosReutilizable
      nextUrl="-GACETA"
      secciones={datosGaceta}
      titulo="Gaceta"
      descripcion="Explora las gacetas de la Universidad Tecnológica de Tecamachalco"
    />
  );
};
