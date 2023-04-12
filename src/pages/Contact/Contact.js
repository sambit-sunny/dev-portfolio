import { useState } from "react";

import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";
import "./Contact.css";
import LiveShapes from "../../components/LiveShapes/LiveShapes";

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

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidSubject, setIsValidSubject] = useState(false);
    const [isValidMessage, setIsValidMessage] = useState(false);

    const [nameErrors, setNameErrors] = useState([]);
    const [emailErrors, setEmailErrors] = useState([]);
    const [subjectErrors, setSubjectErrors] = useState([]);
    const [messageErrors, setMessageErrors] = useState([]);

    const handleSubmit = () => {
        setIsSubmitted(true);
        console.log("SUBMIT");
        console.log(name, email, subject, message);
        const { isValid: nameValidity, errors: errorsInName } = validate(name, [
            { pattern: "^.+$", message: "Name is required" },
            {
                pattern: "^[A-Za-z]+$",
                message: "Name must consist of only alphabets",
            },
        ]);
        setIsValidName(nameValidity);
        setNameErrors(errorsInName);

        const { isValid: emailValidity, errors: errorsInEmail } = validate(
            email,
            [
                { pattern: "^.+$", message: "Email is required" },
                {
                    pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                    message: "Email format is incorrect",
                },
            ]
        );
        setIsValidEmail(emailValidity);
        setEmailErrors(errorsInEmail);

        const { isValid: subjectValidity, errors: errorsInSubject } = validate(
            subject,
            [{ pattern: "^.+$", message: "Subject is required" }]
        );
        setIsValidSubject(subjectValidity);
        setSubjectErrors(errorsInSubject);

        const { isValid: messageValidity, errors: errorsInMessage } = validate(
            message,
            [{ pattern: "^.+$", message: "Message is required" }]
        );
        setIsValidMessage(messageValidity);
        setMessageErrors(errorsInMessage);

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
                                    className={`input-field ${
                                        isSubmitted && !isValidName
                                            ? "error"
                                            : ""
                                    }`}
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
                                    className={`input-field ${
                                        isSubmitted && !isValidEmail
                                            ? "error"
                                            : ""
                                    }`}
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
                                className={`input-field ${
                                    isSubmitted && !isValidSubject
                                        ? "error"
                                        : ""
                                }`}
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
                                className={`input-field ${
                                    isSubmitted && !isValidMessage
                                        ? "error"
                                        : ""
                                }`}
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
            <div className="shapes-container">
                <LiveShapes />
            </div>
        </div>
    );
}
