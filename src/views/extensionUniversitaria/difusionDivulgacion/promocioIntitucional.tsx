import TablaDocumentosReutilizable from "@/components/tablaDocumentosReutilizable";
import datosPromocionI from "@/data/data.promocion";

const PromocioIntitucional = () => {
  return (
    <TablaDocumentosReutilizable
      nextUrl="-PROMOCION"
      secciones={datosPromocionI}
      titulo="Promoción Institucional"
      descripcion="Explora la Promoción Institucional de la Universidad Tecnológica de Tecamachalco"
    />
  );
};

export default PromocioIntitucional;
