import './Header.css'
import LinkNav from './../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div className='my-title'>
                <h1>FilmeLand</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/Notícias" texto='Notícias'/>
                    </li>
                    <li>
                        <LinkNav url="/Sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/Contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header