
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";


export const Page_404 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <div
      className="min-h-screen flex items-center text-white"
      style={{
        background: "linear-gradient(135deg, #c75b20 35%, #0A9782 100%)",
      }}
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-2">
          <img
            src="/motocle404.png"
            alt="Not Found"
            className="w-full h-auto transform transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-7xl md:text-8xl font-bold mb-4 drop-shadow-lg">404</div>
          <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">¡Oops! Página no encontrada</h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                La página que estás buscando parece que se ha perdido en el ciberespacio. ¿Quieres volver al camino
                principal?
              </p>
            </div>
          <button
            onClick={goHome}
            className="bg-white text-[#c75b20] font-semibold px-8 py-4 rounded-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            <span className="hover:text-[#0A9782] flex">Ir a Inicio<Home className="ml-2"/></span> 
          </button>
        </div>
      </div>
    </div>
  );
};
