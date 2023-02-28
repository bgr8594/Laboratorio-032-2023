import { Injectable } from '@angular/core';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Playstation 5', 
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL.jpg',
      ingredientes: ["VENTAJAS:","1.-Se juega chido","2.-Esta bonito","DESVENTAJAS:","1.-Ta caro","2.-Los juegos tan caros tambien"]
    },
    {
      id: 2, 
      nombre: 'XBOX series X', 
      image: 'https://m.media-amazon.com/images/I/51Gi3RXwaSL._AC_SL1080_.jpg',
      ingredientes: ['VENTAJAS:','1.-Ninguna',
      '2.-No estan viendo? Esta muy feo','DESVENTAJAS:','1.-Todas',
      '2.-Sigue muy feo']
    },
    {
      id: 3, 
      nombre: 'PC GAMER', 
      image: 'https://resources.sears.com.mx/medios-plazavip/mkt/62b72b7948103_d_nq_np_2x_702507-mlm43852016084_102020-fpng.jpg?scale=550',
      ingredientes: [
        'VENTAJAS:','1.-Muchos colores','DESVENTAJAS:','1.-Demasiados colores']
    },
    {
      id: 4, 
      nombre: 'Nintendo Switch', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_940205-MLA52928500647_122022-O.jpg',
      ingredientes: [
        'VENTAJAS:','1.-Puedes ir al baño y seguir jugando','DESVENTAJAS','1.-Se le acaba la pila']
    },
    {
      id: 5, 
      nombre: 'El espanta tiburones', 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeh65vq_48gszX820TAtHQ3PmJBsCMqRw1A&usqp=CAU",
      ingredientes: [
        'la mejor pelicula de la historia']
    }

  ];
  constructor() { }
  
  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }
}