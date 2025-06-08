interface Props {
  fakePDFUrl?: string;
  imageUrl?: string;

  setIsLoading: (loading: boolean) => void;
}

export const ContenedorPDF = ({ fakePDFUrl, setIsLoading }: Props) => {
  return (
    <div className="flex-1 p-4">
      <iframe
        src={fakePDFUrl}
        className="w-full md:w-3/4 h-[80vh] mx-auto mb-10s"
        title="Calendario PDF"
        style={{ border: "none" }}
        onLoad={() => {
          console.log(" PDF cargado");
          setIsLoading(false);
        }}
      />
    </div>
  );
};
