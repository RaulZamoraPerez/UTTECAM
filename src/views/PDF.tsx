import { useParams } from "react-router-dom";

const PDF = () => {
  const { title } = useParams();


  const fakePDFUrl = "../public/becas.pdf"; 

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-white  ">
        <h1 className="text-xl font-bold text-center">{title}</h1>
      </div>
      <iframe
        src={fakePDFUrl}
        className="w-3/4 h-full mx-auto"
        title={`Documento ${title}`}
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default PDF;
