
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navegación</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li Class="nav-item dropdown">
                        <a Class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul Class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a Class="dropdown-item" href="#">Action</a></li>
                            <li><a Class="dropdown-item" href="#">Another action</a></li>
                            <li><hr Class="dropdown-divider"/></li>
                            <li><a Class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li Class="nav-item">
                        <a Class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form Class="d-flex">
                        <input Class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"/>
                        <button Class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;