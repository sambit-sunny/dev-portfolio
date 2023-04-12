import "./Link.css";

export default function Link({ href, content }) {
    return (
        <a
            className="styled-link"
            rel="noopener noreferrer"
            href={href}
            target="_blank"
        >
            {content}
        </a>
    );
}
