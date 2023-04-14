import "./Hamburger.css";

export default function Hamburger() {
    return (
        <>
            <div className="ham-overlay">
                <div className="bar left"></div>
                <div className="bar right"></div>
                <div className="bar left"></div>
            </div>
            <div className="ham"></div>
        </>
    );
}
