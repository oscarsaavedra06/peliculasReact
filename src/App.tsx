
import './App.css';
import { pelicula, peliculasLandingDTO } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import ListadoPeliculas from './peliculas/ListadoPelicula';
import { useEffect, useState } from 'react';

function App() {

  const [peliculas, setPeliculas] = useState<peliculasLandingDTO>({})

  useEffect(() => {

    const timerId = setTimeout(() => {
      setPeliculas({

        enCartelera: [
          { id: 2, titulo: "avengers", poster: "https://cnnespanol.cnn.com/wp-content/uploads/2019/04/avengers-endgame-poster-records.jpg?quality=100&strip=info" },
          { id: 3, titulo: "jhon wick", poster: "https://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg" }
        ],

        proximosEstrenos: [
          {
            id: 1, titulo: 'spiderman', poster: 'https://as.com/meristation/imagenes/2021/02/01/noticias/1612182790_656821_1612182823_noticia_normal.jpg'
          }
        ]
      })
    }, 3000);

  })

  

  return (
    <>
      <h2>En cartelera</h2>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />

      <h2>Próximos estrenos</h2>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
}

export default App;
