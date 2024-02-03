import './nav.css'


export default function Nav({setOption}){

    function cambiarPagina(pagina){
        setOption(pagina)
    }

    return(
        <>
            <header>
                <nav id="nav">
                    <div className="navSection">

                    </div>
                    <div className="navSection">
                        <h1>Mi sitio</h1>
                    </div>
                    <div className="navSection">
                        <ul>
                            <li onClick={() => cambiarPagina(0)}>Ver</li>
                            <li onClick={() => cambiarPagina(1)}>Guardar</li>
                            <li onClick={() => cambiarPagina(2)}>Page 3</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}