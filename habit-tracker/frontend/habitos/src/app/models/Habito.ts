export interface Habito {
    usuarioId: string;
    id_categoria: string;
    nombre: string;
    descripcion: string;
    diasConsecutivos: number;
    diasTotales: number;
    tiempo: number;
    medalla: string;
    realizadoHoy: boolean;
}