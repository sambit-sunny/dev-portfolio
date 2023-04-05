import "./Card.css";

export default function Card({ link, imgSrc, imgAlt, title }) {
    return (
        <div className="card">
            <div class="content">
                <a
                    className="link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="image" src={imgSrc} alt={imgAlt} />
                    <div className="view">
                        View <br /> Project
                    </div>
                </a>
                <p className="title">{title}</p>
            </div>
        </div>
    );
}
