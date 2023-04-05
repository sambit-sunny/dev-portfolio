import './Card.css'

export default function Card({link, imgSrc, imgAlt, title}) {
    return (
        <div className='card'>
            <a className='link' href={link} target="_blank" rel="noopener noreferrer">
                <img className='image' src={imgSrc} alt={imgAlt} />
                <p className='title'>{title}</p>
            </a>
        </div>
    )
}