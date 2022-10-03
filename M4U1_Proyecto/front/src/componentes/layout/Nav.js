import{Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div><nav className="navbar navbar-expand-lg bg-light">
            <div id="ContenedorSuperior" class="container">

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/destinos">Destinos</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>                 
                    </ul>
                </div>
            </div>
        </nav>
        </div>

    );
}
export default Nav;