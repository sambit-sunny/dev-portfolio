import "./Hamburger.css";

export default function Hamburger() {
    return (
        <>
            <button className="ham">
                <div className="bar left"></div>
                <div className="bar right"></div>
                <div className="bar left"></div>
            </button>
            <div className="ham-overlay"></div>
        </>
    );
}
