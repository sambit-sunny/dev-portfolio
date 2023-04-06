import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";
import "./Contact.css";

export default function Contact() {
    const text = "Contact Me";

    return (
        <div id="contact" className="section-full section-about">
            <div className="text-zone">
                <header>
                    <h2 aria-label={text}>
                        {text.split("").map((letter, index) => {
                            if (letter === " ") {
                                return <span>&nbsp;</span>;
                            } else {
                                return (
                                    <BlastText aria-hidden="true" key={index}>
                                        {letter}
                                    </BlastText>
                                );
                            }
                        })}
                    </h2>
                </header>
                <p>
                    I’m interested in freelance opportunities – especially
                    ambitious or large projects. However, if you have other
                    request or question, don’t hesitate to use the form.
                </p>
                <div className="contact-form-container">
                    <form id="contact-form" autoComplete="off">
                        <div className="row">
                            <div>
                                <input
                                    className="input-field"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                />
                                <span className="focus"></span>
                            </div>
                            <div>
                                <input
                                    className="input-field"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="row">
                            <input
                                className="input-field"
                                placeholder="Subject"
                                type="text"
                                name="subject"
                            />
                            <span className="focus"></span>
                        </div>
                        <div className="row">
                            <textarea
                                className="input-field"
                                placeholder="Message"
                                name="msg"
                            ></textarea>
                            <span className="focus"></span>
                        </div>
                        <div className="row">
                            <Button title="Send Message!" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="stuff">
                <div>Stuff</div>
            </div>
        </div>
    );
}
