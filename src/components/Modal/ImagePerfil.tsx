

interface Props{
    name: string;
    imageUrl?: string;
}
export const ImagePerfil = ({name, imageUrl=""}: Props) => {
  return (
    <div className="w-32 h-32 mx-auto  rounded-full border-4 border-white shadow-md bg-gradient-to-br from-orange-100 to-yellow-100">
                    <img
                      src={`${imageUrl ? imageUrl : "/Profesores/image.png"}`}
                      alt={name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
  )
}
