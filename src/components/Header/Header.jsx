import { Container, Section } from "pages/Page.styled";
import { HeaderStyled, LogoWrap, MainTitle, NavStyled, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <Section>
            <Container>
                <HeaderStyled>
                    <LogoWrap>
                        <MainTitle>Medicine Delivery app</MainTitle>
                    </LogoWrap>
                    <NavStyled>
                        <StyledNavLink to="/">Pharmacies</StyledNavLink>
                        <StyledNavLink to="/cart">Shopping cart</StyledNavLink>
                    </NavStyled>
                </HeaderStyled>
            </Container>
        </Section>
    )
};