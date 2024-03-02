import { Container, Section } from "pages/Page.styled";
import { HeaderStyled, LogoWrap, MainTitle, NavStyled, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <Section>
            <Container $bottom='0px'>
                <HeaderStyled>
                    <LogoWrap>
                        <MainTitle>Medicine Delivery app</MainTitle>
                    </LogoWrap>
                    <NavStyled>
                        <StyledNavLink to="/">Home</StyledNavLink>
                        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
                        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                    </NavStyled>
                </HeaderStyled>
            </Container>
        </Section>
    )
};