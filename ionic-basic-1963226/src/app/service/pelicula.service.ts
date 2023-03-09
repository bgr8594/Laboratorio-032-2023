import { Injectable } from '@angular/core';
import { Pelicula } from '../interface/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  peliculas: Pelicula[]=[
    {
      id:1, 
      nombre: 'The Avengers', 
      image: 'https://static.wikia.nocookie.net/disneyypixar/images/4/45/The_Avengers.jpg/revision/latest?cb=20190401212122&path-prefix=es',
      concepto: ['Primera pelicula de los vengadores, donde se forma pro primera vez el grupo de superheroes para poder salvar al mundo de un Asgardiano exiliado que posee el Teceracto, y dihos superheroes quieren recueperalo']
    },
    {
      id:2, 
      nombre: 'The Avengers: Age of Ultron', 
      image: 'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/avengers_age_of_ultron_xxlg_720x.jpg?v=1579622503.jpg',
      concepto: ['Nuevamente se reunen los Vengadores para combatir en otra batalla, pero esta vez contra Ultrón, una inteligencia artificial creada por Tony Stark y Bruce Banner; pero esta toma consiencia y quiere destruir a la humanidad.']
    },
    {
      id:3, 
      nombre: 'Captain America: Civil War', 
      image: 'https://static.wikia.nocookie.net/marveldatabase/images/0/02/Captain_America_Civil_War_poster_014.jpg/revision/latest?cb=20160310174551.jpg',
      concepto: ['Pelicula especialente dentro de Capitan America, pero importante dentro de los vengadores, pues en esta entrega los Vengadores se reunen para realizar un acuerdo de paz, después de los dentrozos en las batallas anteriores. Debido al desacuerdo, Tony Stark y Steve Rogers pelean por su punto de vista, generando así la separación de estos superheroes.']
    },
    {
      id:4, 
      nombre: 'The Avengers: Infinity War', 
      image: 'https://static.wikia.nocookie.net/disney/images/e/e3/Infinity_War_Poster.jpg/revision/latest?cb=20180317002413&path-prefix=es',
      concepto: ['Casi al final de estas batallas con los Heroes, en esta pelicula se encuentran contra el más grande enemigo hasta el momento Thanos, un super titan destruye planetas que se encuentra en busca de las gemas del infinito, para poder obtener todo el poder del universo. Así los heroes de esta saga se enfrentan a él para evitar la destrucción del planeta Tierra.']
    },
    {
      id:5, 
      nombre: 'The Avengers: End Game', 
      image: 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/avengers-endgame-movie-poster-image0.jpeg',
      concepto: ['Final de la saga de superheroes, pero no de este universo de Marvel, End Game es la continuación de Infinity War, pero esta vez con solo algunos de los sovrevivientes a la batalla anterior, viajando en el tiempo e intentando recuperar lo que perdieron, pero esta vez a costo de los más destacados heroes, pero salvando al mundo. Sin duda un merecido final aunque debastador.']
    },
  ];

  constructor() { }

  getPeliculas(){
    return[...this.peliculas]
  }
  getPelicula(idPelicula: number){
    return{...this.peliculas.find((pelicula: Pelicula)=>{
      return pelicula.id===idPelicula
    }
    )};

    }
}
