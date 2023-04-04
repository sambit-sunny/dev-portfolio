import "./About.css";

export default function About() {
    const text = "Me, Myself and I";

    return (
        <div id="about" className="section-full section-about">
            <div className="text-zone">
                <header>
                    <h2 aria-label={text}>{text}</h2>
                </header>
                <p>
                    I'm Highly motivated and skilled software engineer with 2
                    years of experience in developing and implementing software
                    solutions.
                </p>
                <p>
                    Proficient in .NET, Python, React, JavaScript, and SQL.
                    Skilled in problem-solving and teamwork, with a track record
                    of delivering high-quality projects on time and within
                    budget.
                </p>
                <p>
                    Committed to continuous learning and development to stay up
                    to date with the latest industry trends. Seeking a
                    challenging software engineering role to drive innovation
                    and success.
                </p>
            </div>
        </div>
    );
}
