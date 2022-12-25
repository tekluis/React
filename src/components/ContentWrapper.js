
import TopBar from './TopBar';
import ContentRow from './ContentRow';
import Footer from './Footer';
import Tabla from './Tabla';

function ContentWrapper(){

    return(
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <TopBar/>
            <ContentRow/>
        </div>
        <Tabla/>
        <Footer/>
    </div>

    )

}

export default ContentWrapper;