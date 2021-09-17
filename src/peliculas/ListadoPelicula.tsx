import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";


export default function ListadoPeliculas(props: listadoPeliculasProps) {

    return (
        <div>
            {props.peliculas.map(item => <PeliculaIndividual pelicula={item}
                key={item.id}

            />)}
        </div>


    )

}

interface listadoPeliculasProps {

    peliculas: pelicula[]

}