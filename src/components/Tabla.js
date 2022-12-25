

function Tabla () {
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
                <tr>
                    <th scope="row">Billie Elioth</th>
                    <td>5</td>
                    <td><ul><li>Drama</li><li>Comedia</li></ul></td>
                    <td>2</td>
                </tr>
                <tr>
                    <th scope="row">Alicia en el pais de las maravillas</th>
                    <td>142</td>
                    <td><ul><li>Drama</li><li>Accion</li><li>Comedia</li></ul></td>
                    <td>4.8</td>
                </tr>
                <tr>
                    <th scope="row">Billie Eliot</th>
                    <td>5</td>
                    <td><ul><li>Drama</li><li>Comedia</li></ul></td>
                    <td>2</td>
                </tr>
            </tbody>


        </table>

    )
}

export default Tabla;