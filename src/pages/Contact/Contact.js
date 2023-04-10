import { useState } from "react";

import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";
import "./Contact.css";

function validate(value, rules) {
    let isValid = false;
    let errors = [];
    rules.forEach((rule) => {
        const re = new RegExp(rule.pattern);
        if (!re.test(value)) {
            errors.push(rule.message);
        }
    });
    if (errors.length > 0) {
        isValid = false;
    } else {
        isValid = true;
    }

    return { isValid, errors };
}

export default function Contact() {
    const text = "Contact Me";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.log("SUBMIT");
        console.log(name, email, subject, message);
        const { isValid: isValidName, errors: nameErrors } = validate(name, [
            { pattern: "^.+$", message: "Name is required" },
            {
                pattern: "^[A-Za-z]+$",
                message: "Name must consist of only alphabets",
            },
        ]);
        const { isValid: isValidEmail, errors: emailErrors } = validate(email, [
            { pattern: "^.+$", message: "Email is required" },
            {
                pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
                message: "Email format is incorrect",
            },
        ]);
        const { isValid: isValidSubject, errors: subjectErrors } = validate(
            subject,
            [{ pattern: "^.+$", message: "Subject is required" }]
        );
        const { isValid: isValidMessage, errors: messageErrors } = validate(
            message,
            [{ pattern: "^.+$", message: "Message is required" }]
        );
        console.log(nameErrors, emailErrors, subjectErrors, messageErrors);
    };

    return (
        <div id="contact" className="section-full section-contact">
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
                    I'm interested in freelance opportunities - especially
                    ambitious or large projects. However, if you have other
                    request or question, don't hesitate to use the form.
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
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                                <span className="focus"></span>
                            </div>
                            <div>
                                <input
                                    className="input-field"
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
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
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                }}
                            />
                            <span className="focus"></span>
                        </div>
                        <div className="row">
                            <textarea
                                className="input-field"
                                placeholder="Message"
                                name="msg"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                            <span className="focus"></span>
                        </div>
                        <div className="row" onClick={handleSubmit}>
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
