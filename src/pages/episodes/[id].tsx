import { Box } from "@/components/reusables/Box";
import { Layout } from "@/components/reusables/Layout";
import { Typography } from "@/components/reusables/Typography";
import { IEpisode } from "@/interfaces/Episode";
import EpisodeService from "@/services/EpisodeService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChevronLeft, Film } from "react-feather";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as Styled from "@/components/pages/Episodes/styles";
import CharactersService from "@/services/CharactersService";
import { ICharacter } from "@/interfaces/Character";

export default function EpisodesPage(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState<IEpisode>({} as IEpisode);
  const [characters, setCharacters] = useState<ICharacter[]>(
    [] as ICharacter[]
  );
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const { data } = await EpisodeService.fetchById(id as string);
        setEpisode(data);

        const charactersId = data.characters.map((character: any) =>
          character.replace(/\D/g, "")
        );

        const { data: charactersData } = await CharactersService.fetchById(
          charactersId.join(",")
        );

        setCharacters(charactersData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        alignSelf="flex-start"
        mt="4"
        onClick={() => router.back()}
        style={{
          cursor: "pointer",
        }}
      >
        <ChevronLeft />
        <Typography ml="1rem" fontSize="md" fontWeight="600">
          go back
        </Typography>
      </Box>
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Box mt="2">
            <Skeleton height={300} />
          </Box>
        </SkeletonTheme>
      )}
      {!loading && episode && characters && (
        <Box bg="shape" borderRadius="1rem" padding="2rem" marginTop="2rem">
          <Styled.Container>
            <Box display="flex" alignItems="center" gridGap="2">
              <Film />
              <Typography size="xl" fontWeight="700">
                {episode.name}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gridGap="2" mt="4">
              <Typography size="sm" fontWeight="700">
                Episode:
              </Typography>
              <Typography size="sm" fontWeight="400">
                {episode.episode}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gridGap="2" mt="3">
              <Typography size="sm" fontWeight="700">
                Air date:
              </Typography>
              <Typography size="sm" fontWeight="400">
                {episode.air_date}
              </Typography>
            </Box>

            <Box mt="4">
              <Typography size="sm" fontWeight="700">
                Characters:
              </Typography>
              <Box display="flex" gridGap="2" mt="2" flexWrap="wrap">
                {characters.map((character) => (
                  <Link key={character.id} href={`/characters/${character.id}`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      gridGap="2"
                      flexWrap="wrap"
                    >
                      <Styled.CharacterImage
                        src={character.image}
                        alt={character.name}
                        // width="50"
                        // height="50"
                      />
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Styled.Container>
        </Box>
      )}
    </Layout>
  );
}
