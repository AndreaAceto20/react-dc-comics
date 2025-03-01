import ComicsList from "./Cards/ComicsList"



export default function Main() {
    return (<main >
        <section className="content container"><ComicsList /></section>
        <section className="shop container flex">
            <div className="flex">
                <img src="../img/buy-comics-digital-comics.png"></img>
                <span>DIGITAL COMICS</span>
            </div>
            <div className="flex">
                <img src="../img/buy-comics-merchandise.png"></img>
                <span>DC MERCHANDISE</span>
            </div>
            <div className="flex">
                <img src="../img/buy-comics-subscriptions.png"></img>
                <span>SUBSCRIPTION</span>
            </div>
            <div className="flex">
                <img src="../img/buy-comics-shop-locator.png"></img>
                <span>COMIC SHOP LOCATOR</span>
            </div>
            <div className="flex">
                <img src="../img/buy-dc-power-visa.svg"></img>
                <span>DC POWER VISA</span>
            </div>
        </section>
    </main>)
};