import "./Button.css";

export default function Button({ title, rel, href }) {
    return (
        <a class="button" rel={rel} href={href}>
            {title}
        </a>
    );
}
