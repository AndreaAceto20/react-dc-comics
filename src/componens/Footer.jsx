import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (<footer>

        <section className="container links flex">
            <div className="divider">
                <h4>DC COMICS</h4>
                <ul>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                </ul>
            </div>
            <div className="divider">
                <h4>SHOP</h4>
                <ul>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
            </div>
            <div className="divider">
                <h4>DC</h4>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy policy (New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="divider">
                <h4>SITES</h4>
                <ul>
                    <li>DC</li>
                    <li>MAD Magazines</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>
        </section>
        <section className="bottom-footer flex container">
            <button>SIGN-UP NOW</button>
            <div className='flex icons'>
                <h4>FOLLOW US</h4>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
        </section>

    </footer>)
};





