export default function Card(props) {
    return (
        <div className="card">
            <img src={props.comicSrc} alt={props.comicTitle} />
            <p>{props.comicTitle}</p>
        </div>
    )
}