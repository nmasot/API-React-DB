import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">ExploraMundo</Link>
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/paises">Países</Link>
                    <Link className="nav-link" to="/sobre-nosotros">Nosotros</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                </div>
            </div>
        </nav>
    )
}