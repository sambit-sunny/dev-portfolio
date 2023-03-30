import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    min-height: 100vh;
    position: relative;
    padding: 8rem 2rem;
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
    font-weight: 600;
    opacity: 1;
    font-size: 6rem;
    line-height: 1;
`;

const Title = styled.p`
    color: #8d8d8d;
    letter-spacing: 4px;
    font-size: 1.6rem;
    margin: 2rem 0;
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
            </Container>
        </Wrapper>
    );
}
