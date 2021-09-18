import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import Cargando from "./utils/cargando";
import ListadoGenerico from "./utils/ListadoGenerico";


export default function ListadoPeliculas(props: listadoPeliculasProps) {

    return (
        <ListadoGenerico listado={props.peliculas} cargandoUI={<>cargando</>}>

            <div>
                {props.peliculas?.map(item => <PeliculaIndividual pelicula={item}
                    key={item.id}

                />)}
            </div>

        </ListadoGenerico>

    )



}

interface listadoPeliculasProps {

    peliculas?: pelicula[]

}