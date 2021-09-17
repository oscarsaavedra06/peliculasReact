
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import ListadoPeliculas from './peliculas/ListadoPelicula';

function App() {
  const pelicula: pelicula = {

    id: 1, titulo: 'spiderman', poster: 'https://as.com/meristation/imagenes/2021/02/01/noticias/1612182790_656821_1612182823_noticia_normal.jpg'

  };

  const peliculas: pelicula[] = [
  
    {id: 2, titulo: "avengers", poster: "https://cnnespanol.cnn.com/wp-content/uploads/2019/04/avengers-endgame-poster-records.jpg?quality=100&strip=info"},
    {id: 3, titulo: "jhon wick", poster: "https://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg"}
  
  
  ]
  peliculas.push(pelicula)

  return (
    <>
      {/* <PeliculaIndividual pelicula={pelicula} /> */}
      <ListadoPeliculas peliculas={peliculas}/>
    </>
  );
}

export default App;
