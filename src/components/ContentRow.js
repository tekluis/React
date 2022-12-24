
import ContentRowTop from "./ContentRowTop.js";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb.js";


function ContentRow(){

    return(
    <div className="container-fluid">

        <ContentRowTop/>

        <ContentRowMovies/>

        <div className="row">

            <LastMovieInDb/>

            <GenresInDb/>

        </div>



    </div>
    )
}

export default ContentRow;