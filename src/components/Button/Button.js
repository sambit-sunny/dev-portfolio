import "./Button.css";

export default function Button({ title, rel, href }) {
    return (
        <a className="button" rel={rel} href={href}>
            {title}
        </a>
    );
}
