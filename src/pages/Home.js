import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    min-height: 100vh;
    position: relative;
    padding: 10rem 2rem;
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Heading = styled.h1`
    color: #fff;
    margin: 0;
    position: relative;
    font-family: Helvetica;
    font-weight: 700;
    opacity: 1;
    font-size: 5rem;
    line-height: 1;
`;

const Title = styled.p`
    color: #8d8d8d;
    letter-spacing: 4px;
    font-size: 1.3rem;
    margin: 2rem 0;
`;

const Contact = styled.a`
    max-width: 200px;
    height: 50px;
    line-height: 45px;
    color: #08fdd8;
    border: 1px solid #08fdd8;
    font-size: 18px;
    letter-spacing: 4px;
    text-decoration: none;
    width: 100%;
    margin-top: 30px;
    position: relative;
    display: block;
    text-align: center;
    background: linear-gradient(to right, #08fdd8 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;

    &:hover {
        background-color: #08fdd8;
        background-position: left bottom;
        color: #000;
    }
`;

export default function Home() {
    const sentence = "Hi, I'm Milind, Web Developer";

    return (
        <Wrapper>
            <Container>
                <Heading aria-label={sentence}>
                    {sentence.split(",").map((phrase, index) => (
                        <>
                            {phrase.split("").map((letter, index) => (
                                <span aria-hidden="true" key={`phrase${index}`}>
                                    {letter}
                                </span>
                            ))}
                            <span aria-hidden="true" key={`comma${index}`}>
                                ,
                            </span>
                            <br key={`break${index}`} />
                        </>
                    ))}
                </Heading>
                <Title>Full Stack Developer</Title>
                <Contact rel="contact" href="/contact">
                    Contact me!
                </Contact>
            </Container>
        </Wrapper>
    );
}
