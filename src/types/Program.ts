export interface Program {
  id: number
  title: string
  duration: string
  image?: string
  category: string
}



export interface OrgNode {
  id?: string;
  expanded?: boolean;
  type?: string;
  label?: string;
  data?: {
    image: string;
    name: string;
    title: string;
  };
  children?: OrgNode[];
}



export interface Contact{
 nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    miembro: string;
    matricula: string;
    mensaje: string;
}