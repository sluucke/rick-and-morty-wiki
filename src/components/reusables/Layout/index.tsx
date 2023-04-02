import Image from "next/image";
import Link from "next/link";
import * as Styled from "./styles";
import { Button } from "../Button";
import { Menu } from "react-feather";
import { useState } from "react";
import { Typography } from "../Typography";
import Head from "next/head";

export const Layout = ({
  children,
  title = "Rick and Morty",
}: {
  children: React.ReactNode;
  title?: string;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Styled.Container>
        <Styled.NavContainer>
          <Styled.NavLogo href="/">
            <Image
              src="/images/logo.png"
              alt="Rick and Morty"
              fill={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Styled.NavLogo>
          <Styled.NavMenu>
            <Button
              display="flex"
              variant="text"
              onClick={() => setIsOpen((state) => !state)}
            >
              <Menu />
            </Button>
          </Styled.NavMenu>
          <Styled.Nav isMenuOpen={isOpen}>
            <Styled.NavLinks>
              <Styled.NavLink>
                <Link href="/">home</Link>
              </Styled.NavLink>
              <Styled.NavLink>
                <Link href="/characters">characters</Link>
              </Styled.NavLink>
              <Styled.NavLink>
                <Link href="/favorites">favorites</Link>
              </Styled.NavLink>
            </Styled.NavLinks>
          </Styled.Nav>
        </Styled.NavContainer>
        {children}

        <Styled.Footer>
          <Styled.FooterContainer>
            <Styled.FooterLogo>
              <Image
                src="/images/logo.png"
                alt="Rick and Morty"
                fill={true}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Styled.FooterLogo>
            <Styled.FooterLinks>
              <Styled.FooterLink>
                <Link href="/">home</Link>
              </Styled.FooterLink>
              <Styled.FooterLink>
                <Link href="/characters">characters</Link>
              </Styled.FooterLink>
              <Styled.FooterLink>
                <Link href="/episodes">episodes</Link>
              </Styled.FooterLink>
              <Styled.FooterLink>
                <Link href="/favorites">favorites</Link>
              </Styled.FooterLink>
            </Styled.FooterLinks>
            <Typography as="p" size="sm" color="text.light">
              Developed by{" "}
              <Styled.Link
                href="https://github.com/sluucke"
                target="_blank"
                rel="noopener noreferrer"
              >
                David W.
              </Styled.Link>
            </Typography>
          </Styled.FooterContainer>
        </Styled.Footer>
      </Styled.Container>
    </>
  );
};
