import Navbar from "./Navbar"




export default function Header() {

    const links = [
        { id: 1, text: "CHARACTERS", url: "#", current: false },
        { id: 2, text: "COMICS", url: "#", current: true },
        { id: 3, text: "MOVIES", url: "#", current: false },
        { id: 4, text: "TV", url: "#", current: false },
        { id: 5, text: "GAMES", url: "#", current: false },
        { id: 6, text: "COLLECTIBLES", url: "#", current: false },
        { id: 7, text: "FANS", url: "#", current: false },
        { id: 8, text: "NEWS", url: "#", current: false },
        { id: 9, text: "SHOP", url: "#", current: false },

    ]



    return (<header className="container flex">
        <figure>
            <img src="../img/dc-logo.png"></img>
        </figure>
        <Navbar linksProp={links} />
    </header>)
};