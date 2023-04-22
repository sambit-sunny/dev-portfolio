import "./Hamburger.css";

export default function Hamburger({ isNavOpen, setIsNavOpen }) {
    return (
        <>
            <button className="ham" onClick={() => setIsNavOpen(!isNavOpen)}>
                {isNavOpen ? (
                    <div className="close">
                        <div className="cross"></div>
                        <div className="cross"></div>
                    </div>
                ) : (
                    <>
                        <div className="bar left"></div>
                        <div className="bar right"></div>
                        <div className="bar left"></div>
                    </>
                )}
            </button>
            <div className="ham-overlay"></div>
        </>
    );
}
