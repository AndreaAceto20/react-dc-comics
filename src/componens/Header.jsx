export default function Header() {
    return (<header className="container flex">
        <figure>
            <img src="../img/dc-logo.png"></img>
        </figure>
        <nav>
            <ul className="flex">
                <li>CHARACTERS</li>
                <li className="active">COMICS</li>
                <li>MOVIES</li>
                <li>TV</li>
                <li>GAMES</li>
                <li>COLLECTIBES</li>
                <li>FANS</li>
                <li>NEWS</li>
                <li>SHOP</li>
            </ul>
        </nav>
    </header>)
};