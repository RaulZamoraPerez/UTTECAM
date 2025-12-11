export interface Program {
  id: number
  nombre: string
  siglas: string
  nivel: string
  duracion: string
  objetivo: string
  perfil_ingreso: string
  perfil_egreso: string
  campo_laboral: string
  imagen?: string
  orden: number
  activo: boolean
  createdAt?: string
  updatedAt?: string
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
    text?: string;
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