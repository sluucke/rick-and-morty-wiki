import { Box } from "@/components/reusables/Box";
import { Layout } from "@/components/reusables/Layout";
import { Typography } from "@/components/reusables/Typography";
import { ICharacter } from "@/interfaces/Character";
import CharactersService from "@/services/CharactersService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChevronLeft } from "react-feather";
import * as Styled from "@/components/pages/Characters/CharacterInfo/styles";
import Image from "next/image";
import { ILocation } from "@/interfaces/Location";
import LocationService from "@/services/LocationService";
import { IEpisode } from "@/interfaces/Episode";
import EpisodeService from "@/services/EpisodeService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CharacterInfo(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<ICharacter>({} as ICharacter);
  const [location, setLocation] = useState<ILocation>({} as ILocation);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const { data } = await CharactersService.fetchById(id as string);
        setCharacter(data);

        const { data: locationData } = await LocationService.fetchById(
          data.location.url.replace(/\D/g, "")
        );

        setLocation(locationData);

        const episodesId = data.episode.map((episode: any) =>
          episode.replace(/\D/g, "")
        );

        const { data: episodesData } = await EpisodeService.fetchById(
          episodesId.join(",")
        );

        if (!episodesData.length && typeof episodesData === "object") {
          setEpisodes([episodesData]);
          setLoading(false);
          return;
        }

        setEpisodes(episodesData);

        setLoading(false);
      } catch (err) {
        console.log(err);
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
      {!loading && character && location && (
        <Box bg="shape" borderRadius="1rem" padding="2rem" marginTop="2rem">
          <Styled.Container>
            <Styled.CharacterImage>
              <Image
                src={character.image}
                alt={character.name}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </Styled.CharacterImage>
            <Styled.CharacterInfo>
              <Typography fontWeight="700" size="2xl" mb="3">
                {character.name}
              </Typography>
              <ul>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      gender:
                    </Typography>
                    &nbsp;{character.gender}
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      specie:
                    </Typography>
                    &nbsp;{character.species}
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      status:
                    </Typography>
                    &nbsp;{character.status}
                  </Typography>
                </li>
                <Box
                  width="100%"
                  height="1px"
                  bg="rgba(12,12,14,0.2)"
                  display="flex"
                />
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      origin:
                    </Typography>
                    &nbsp;{character.origin.name}
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      location:
                    </Typography>
                    &nbsp;{character.location.name}
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      location type:
                    </Typography>
                    &nbsp;{location.type}
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Typography as="span" fontWeight="700">
                      dimensions:
                    </Typography>
                    &nbsp;{location.dimension}
                  </Typography>
                </li>
              </ul>
            </Styled.CharacterInfo>
          </Styled.Container>
          <Styled.Episodes>
            <Typography fontSize="xl" fontWeight="700" color="text.light">
              appears in episodes:
            </Typography>
            {episodes ? (
              <ul>
                {episodes.map((episode) => (
                  <Link href={`/episodes/${episode.id}`} key={episode.id}>
                    <li key={episode.id}>
                      {episode.episode} | {episode.name}
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <Typography color="text.light" mt="1rem">
                This character {`doesn't`} appear in any episode
              </Typography>
            )}
          </Styled.Episodes>
        </Box>
      )}
    </Layout>
  );
}
