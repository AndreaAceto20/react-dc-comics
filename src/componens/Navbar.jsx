export default function Navbar(props) {
    return (
        // NAVBAR STATICA
        // <nav>
        //     <ul className="flex">
        //         <li>CHARACTERS</li>
        //         <li className="active">COMICS</li>
        //         <li>MOVIES</li>
        //         <li>TV</li>
        //         <li>GAMES</li>
        //         <li>COLLECTIBES</li>
        //         <li>FANS</li>
        //         <li>NEWS</li>
        //         <li>SHOP</li>
        //     </ul>
        // </nav>

        // NAVBAR DINAMICA
        <nav>
            <ul className="flex">
                {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <a href={link.url} className={link.current ? "active" : ""}>
                            {link.text}
                        </a>
                    </li>


                ))}
            </ul>
        </nav>
    )
}