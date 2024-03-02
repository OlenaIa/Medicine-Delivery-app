import { Container, Welcome, Section, WelcomeWrap } from "./Page.styled";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Section>
            <Container $bottom='0px'>
                <WelcomeWrap>
                    <Welcome>
                        <p>Welcome to Medicine Delivery app!</p>
                        <p>Choose the best for you <Link to="/catalog">HERE</Link></p>
                    </Welcome>
                </WelcomeWrap>
            </Container>
        </Section>
    )
};

export default HomePage;