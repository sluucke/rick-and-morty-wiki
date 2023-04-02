import { BackgroundBloom } from "@/components/reusables/BackgroundBloom";
import { Box } from "@/components/reusables/Box";
import { CharacterCard } from "@/components/reusables/CharacterCard";
import { Layout } from "@/components/reusables/Layout";
import { Typography } from "@/components/reusables/Typography";
import { useApp } from "@/hooks/useApp";
import { ICharacter } from "@/interfaces/Character";
import * as Styled from "@/components/pages/Favorites/styles";

export default function FavoritesPage(): JSX.Element {
  const { favorites, addFavorite, removeFavorite } = useApp();

  const handleFavorite = (character: ICharacter) => {
    if (favorites.find((favorite) => favorite.id === character.id)) {
      return removeFavorite(character);
    }

    return addFavorite(character);
  };
  return (
    <Layout>
      <BackgroundBloom />
      <Box>
        <Typography fontWeight="700" size="xl">
          Favorites
        </Typography>

        <Styled.CharactersSection>
          <Styled.CharactersContainer>
            {!favorites.length && (
              <Typography size="md" mt="2rem">
                You {`don't`} have any favorite characters yet.
              </Typography>
            )}
            {favorites.map((favorite) => (
              <CharacterCard
                key={favorite.id}
                name={favorite.name}
                image={favorite.image}
                status={favorite.status}
                href={`/characters/${favorite.id}`}
                canFavorite={true}
                isFavorite={
                  favorites.find((favorite) => favorite.id === favorite.id)
                    ? true
                    : false
                }
                handleToggleFavorite={() => handleFavorite(favorite)}
              />
            ))}
          </Styled.CharactersContainer>
        </Styled.CharactersSection>
      </Box>
    </Layout>
  );
}
