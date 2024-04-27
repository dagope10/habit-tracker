export interface Habito {
    id_habito: string;
    id_usuario: string;
    id_categoria: string;
    nombre: string;
    descripcion: string;
    diasConsecutivos: number;
    diasTotales: number;
    ultimaVezRealizado: Date;
    medalla: string;
    puedeSerRealizadoHoy: boolean;
   
}