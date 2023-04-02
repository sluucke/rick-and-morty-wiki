import { Layout } from "@/components/reusables/Layout";
import * as Styled from "@/components/pages/Home/styles";
import { Typography } from "@/components/reusables/Typography";
import Image from "next/image";
import * as Input from "@/components/reusables/Input";
import { theme } from "@/styles/theme";
import { ArrowRight, Search } from "react-feather";
import { Box } from "@/components/reusables/Box";
import { Button } from "@/components/reusables/Button";
import { BackgroundBloom } from "@/components/reusables/BackgroundBloom";
import { useApp } from "@/hooks/useApp";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { CharacterCard } from "@/components/reusables/CharacterCard";
import { ICharacter } from "@/interfaces/Character";

interface IFormInput {
  name: string;
}

export default function Home() {
  const { characters, favorites, addFavorite, removeFavorite } = useApp();
  const router = useRouter();

  const { register, handleSubmit } = useForm<IFormInput>();

  const handleSearch: SubmitHandler<IFormInput> = (data) => {
    router.push({
      pathname: "/characters",
      query: {
        name: data.name,
      },
    });
  };

  const handleFavorite = (character: ICharacter) => {
    if (favorites.find((favorite) => favorite.id === character.id)) {
      return removeFavorite(character);
    }
    return addFavorite(character);
  };

  return (
    <Layout>
      <BackgroundBloom />
      <Styled.Container>
        <Styled.Content>
          <Typography as="h2" fontWeight="800" color="white" size="6xl">
            Meet all the Rick and Morty characters
          </Typography>
          <Styled.ContentContainer>
            <Input.Root>
              <Input.Input
                {...register("name")}
                type="text"
                placeholder="type the name of an character"
              />
              <Input.Icon
                onClick={handleSubmit(handleSearch)}
                style={{
                  cursor: "pointer",
                }}
              >
                <Search
                  size={16}
                  color={theme.colors.text.light}
                  opacity="50%"
                />
              </Input.Icon>
            </Input.Root>
            <Button
              onClick={() => router.push("/characters")}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop="1rem"
              // width="75%"
              className="view-characters-button"
            >
              view all characters
              <ArrowRight />
            </Button>
          </Styled.ContentContainer>
        </Styled.Content>
        <Styled.HeroContainer>
          <Styled.HeroImage>
            <Image
              src="/images/rick-and-morty-portal.png"
              alt="Rick and Morty"
              fill={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Styled.HeroImage>
        </Styled.HeroContainer>
      </Styled.Container>
      <Styled.Section>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography as="h3" fontWeight="700" size="2xl">
            characters
          </Typography>
          <Link href="/characters">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{
                cursor: "pointer",
              }}
            >
              <Typography
                color={theme.colors.primary}
                as="span"
                fontWeight="700"
                size="md"
                marginRight="8px"
              >
                view all
              </Typography>

              <ArrowRight color={theme.colors.primary} />
            </Box>
          </Link>
        </Box>
        <Styled.CharactersContainer>
          {characters &&
            characters.results?.length &&
            characters.results.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                href={`/characters/${character.id}`}
                canFavorite={true}
                isFavorite={
                  favorites.find((favorite) => favorite.id === character.id)
                    ? true
                    : false
                }
                handleToggleFavorite={() => handleFavorite(character)}
              />
            ))}
        </Styled.CharactersContainer>
      </Styled.Section>
    </Layout>
  );
}
