export interface CalInterface {
    id: number;
    materia: string;
    calificacion: number;
    aprobado: boolean;
  }
  
  export class Calificacion implements CalInterface {
    constructor(
      public id: number,
      public materia: string,
      public calificacion: number,
      public aprobado: boolean
    ) {}
  }