export default function MiEscuela() {
  return (
    <section className="my-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 text-center mb-2">
            MI ESCUELA
          </h1>
          <h2 className="text-2xl text-gray-700 font-light">
            UNIVERSIDAD TECNOLÓGICA DE TECAMACHALCO
          </h2>
          <div className="mt-4 h-1 w-32 bg-amber-600 rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100">
         
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <div className="text-center mb-8">
              <div className="inline-block bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Información importante
              </div>
            </div>
            
            <p className="text-center max-w-3xl mx-auto">
              En la Universidad Tecnológica de Tecamachalco se cuenta con un sistema de control escolar que
              es acorde al modelo educativo de la institución y puede ser consultado por toda la comunidad
              universitaria.
            </p>
            
            <div className="flex justify-center my-6">
              <div className="h-px bg-amber-200 w-24"></div>
            </div>
            
            <p className="text-center max-w-3xl mx-auto">
              El sistema de Control Escolar está disponible los 365 días del año, durante las 24 horas del día y
              está administrado por el departamento de Servicios Escolares.
            </p>
            
            <div className="flex justify-center my-6">
              <div className="h-px bg-amber-200 w-24"></div>
            </div>
            
            <p className="text-center max-w-3xl mx-auto mb-8">
              Para ingresar al sistema de control escolar deberás tener tu usuario y contraseña y acceder en el
              siguiente enlace:
            </p>
            
            {/* Vista previa del sistema */}
            <img 
              src="miEscuela/mi-escuela.png" 
              alt="Pagina Mi Escuela" 
              className="w-full h-full object-cover rounded-lg borde shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            
            <div className="text-center mt-6">
              <a 
                href="http://187.217.125.214/uttecam/acceso.asp
                " 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Acceder al Sistema
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}