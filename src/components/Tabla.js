import TablaRow from "./TablaRow";

function Tabla () {

    let peliculas =[{
        titulo: "a",
        duracion: "2",
        rating: "3",
        generos: ["a","b"],
        premios: "4",
        },
        {
        titulo: "b",
        duracion: "3",
        rating: "5",
        generos: ["c","d"],
        premios: "8",
    }]


    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Duracion</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Premios</th>
                </tr>
            </thead>
            <tbody>
               
               {peliculas.map( (pelicula,index) => {

                return <TablaRow {...pelicula} key={index}/>

               })}


                <tr>
                    <th scope="col">Titulo</th>
                    <th>Duracion</th>
                    <th>Rating</th>
                    <th>Genero</th>
                    <th>Premios</th>
                </tr>
            </tbody>


        </table>

    )
}

export default Tabla;