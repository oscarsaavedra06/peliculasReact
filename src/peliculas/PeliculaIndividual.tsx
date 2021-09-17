import { pelicula } from "./peliculas.model";
import css from './peliculaindividual.module.css';

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

    const construirLink=()=> `/pelicula/${props.pelicula.id}`

    return (

        <div className={css.div}>

            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="" />
            </a>
            <p>
                {props.pelicula.titulo}
            </p>

        </div>

    )


}


interface PeliculaIndividualProps {
    pelicula: pelicula;
}