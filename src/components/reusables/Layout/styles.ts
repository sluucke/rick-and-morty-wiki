import styled from "styled-components";
import NextLink from "next/link";

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
`;

export const NavMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

interface IProps {
  isMenuOpen: boolean;
}

export const Nav = styled.nav<IProps>`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    background: ${({ theme }) => theme.colors.background};
    z-index: 999;
    flex-direction: column;
    padding: 2rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavLink = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.gray};
  opacity: 80%;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
    opacity: 100%;
  }
`;

export const NavLogo = styled(NextLink)`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: 150px;
  cursor: pointer;
`;

export const NavRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 100px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    margin-top: 0;
    padding-bottom: 1rem;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterLogo = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: 150px;
  cursor: pointer;
`;

export const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterLink = styled.li`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.gray};
  opacity: 80%;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
    opacity: 100%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;
