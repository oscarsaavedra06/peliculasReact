export interface pelicula {

    id: number;
    titulo: string;
    poster: string;

}

export interface peliculasLandingDTO {

    enCartelera?: pelicula[],
    proximosEstrenos?: pelicula[]
}