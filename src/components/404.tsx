
import { useNavigate } from "react-router-dom";

export const Page_404 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex items-center  text-white" style={{ backgroundImage: 'linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%)' }}>
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-2">
          <img  
                src="../motocle.png"
                 alt="Not Found"
               className=  "mx-auto max-w-xs md:max-w-sm lg:max-w-md w-full h-auto"
        />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. esta pagina no existe.
          </div>
          <div className="text-lg mb-8">
            regresa a la pagina principal.
          </div>
          <button
            onClick={goHome}
            className="border border-white rounded p-4 hover:bg-white hover:text-blue-700 transition"
          >
            A inicio
          </button>
        </div>
      </div>
    </div>
  );
};
