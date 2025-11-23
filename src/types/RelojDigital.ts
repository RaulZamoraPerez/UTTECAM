export interface RelojDigital {
  id?: number;
  zonaHoraria: string;
  formato24Horas: boolean;
  mostrarFecha: boolean;
  mostrarDiaSemana: boolean;
  activo: boolean;
  estilo: 'digital' | 'analogico';
  createdAt?: string;
  updatedAt?: string;
}