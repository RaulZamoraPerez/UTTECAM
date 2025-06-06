import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import Error from "./ErrorMessage";
import type { Contact } from "types/Program";
import { toast } from "react-toastify";

export const FormContact = () => {
  const { register,  handleSubmit, formState: { errors }, reset, watch, } = useForm<Contact>({
    defaultValues: {
      nombre: "",
      apellidos: "",
      correo: "",
      telefono: "",
      miembro: "",
      matricula: "",
      mensaje: "",
    },
  });
  const miembroSeleccionado = watch("miembro");

  const onSubmit = (data: Contact) => {
    console.log("Datos del formulario:", data);

    reset();
    toast.success("¡Mensaje enviado con éxito!")
  };

  return (
    <div className="max-w-6xl mx-auto p-5 bg-gray-100 min-h-screen">
      <h1 className="text-center text-orange-600 text-4xl font-bold mb-10">
        Contáctanos
      </h1>

      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        {/* Información del contacto */}
        <div className="flex-1 min-w-[300px] bg-[#0A9782] text-white p-10 rounded-lg relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full"></div>
          <h2 className="text-3xl font-semibold mb-10 relative z-10">
            Información del contacto
          </h2>
          <div className="flex flex-col gap-8 mt-10 relative z-10">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
              <a href="tel:+522494223303" className="hover:underline">
                +52-249-422-3303
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
              <a href="mailto:uttecam@uttecam.com" className="hover:underline">
                uttecam@uttecam.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <a
                href="https://maps.google.com/?q=Universidad+Tecnológica+1,+Barrio+la+Villita,+75483+Tecamachalco,+Pue."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Universidad Tecnológica 1, Tecamachalco, Pue.
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="flex-[2] w-full max-w-[700px] p-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col  gap-5"
          >
            {/* Nombre y apellidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm text-gray-600">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  {...register("nombre", {
                    required: "El nombre es requerido",
                  })}
                  className="p-3 border-b rounded w-full focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.nombre && <Error>{errors.nombre.message}</Error>}
              </div>

              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="apellidos" className="text-sm text-gray-600">
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  type="text"
                  placeholder="Escribe tus apellidos"
                  {...register("apellidos", {
                    required: "El apellido es requerido",
                  })}
                  className="p-3 border-b rounded w-full focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.apellidos && <Error>{errors.apellidos.message}</Error>}
              </div>
            </div>

            {/* Correo y Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="correo" className="text-sm text-gray-600">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                    placeholder="Escribe tu correo electrónico"
                  {...register("correo", {
                    required: "El Email es Obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email No Válido",
                    },
                  })}
                  className="p-3 border-b rounded w-full focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.correo && <Error>{errors.correo.message}</Error>}
              </div>

              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="telefono" className="text-sm text-gray-600">
                  Número de celular
                </label>
                <input
                  id="telefono"
                  type="tel"
                  placeholder="Escribe tu número de celular"
                  {...register("telefono", {
                    required: "El teléfono es requerido",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Debe tener 10 dígitos",
                    },
                  })}
                  className="p-3 border-b rounded w-full focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.telefono && <Error>{errors.telefono.message}</Error>}
              </div>
            </div>

            {/* ¿Miembro de la universidad? */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">
                ¿Eres miembro de la universidad?
              </label>
              <div className="flex flex-wrap gap-5">
                {["Estudiante", "Profesor", "Externo", "Directivos"].map(
                  (rol) => (
                    <label
                      key={rol}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <input
                        type="radio"
                        value={rol}
                        
                        {...register("miembro", {
                          required: "Selecciona una opción",
                        })}
                        className="w-4 h-4 text-emerald-600"
                      />
                      {rol}
                    </label>
                  )
                )}
              </div>
              {errors.miembro && <Error>{errors.miembro.message}</Error>}
            </div>

            {/* Matrícula */}
            {miembroSeleccionado === "Estudiante" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="matricula" className="text-sm text-gray-600">
                  Matrícula
                </label>
                <input
                  id="matricula"
                  type="text"
                  placeholder="Escribe tu matrícula"
                  {...register("matricula", {
                    required:
                      miembroSeleccionado === "Estudiante"
                        ? "La matrícula es requerida"
                        : false,
                  })}
                  className="p-3 border-b rounded w-full focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.matricula && <Error>{errors.matricula.message}</Error>}
              </div>
            )}

            {/* Mensaje */}
            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-sm text-gray-600">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                {...register("mensaje", {
                  required: "El mensaje es requerido",
                })}
                placeholder="Escribe tu mensaje..."
                className="p-3 border-b rounded w-full min-h-[120px] resize-y focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
              {errors.mensaje && <Error>{errors.mensaje.message}</Error>}
            </div>

            {/* Botón */}
            
            <button
            className="self-end  mt-5"
          
             type="submit"
            style={{
              width: "160px",
              height: "39px",
              backgroundColor:  "#0A9782",
              color:  "#FFFFFF", 
              border:   "none",
              borderTopLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              fontWeight: 500,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Enviar Mensaje
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};
