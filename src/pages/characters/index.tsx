import { BackgroundBloom } from "@/components/reusables/BackgroundBloom";
import { Layout } from "@/components/reusables/Layout";
import * as Styled from "@/components/pages/Characters/styles";
import { Typography } from "@/components/reusables/Typography";
import { useApp } from "@/hooks/useApp";
import { CharacterCard } from "@/components/reusables/CharacterCard";
import * as Input from "@/components/reusables/Input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@/components/reusables/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICharacter } from "@/interfaces/Character";
import { Box } from "@/components/reusables/Box";
import { IAPIResponse } from "@/interfaces/APIResponse";
import CharactersService from "@/services/CharactersService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Select } from "@/components/reusables/Select";

interface IFormInputs {
  name: string;
  status: string;
  species: string;
  gender: string;
}

export default function CharactersPage(): JSX.Element {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<IAPIResponse<ICharacter[]>>(
    {} as IAPIResponse<ICharacter[]>
  );

  const { favorites, addFavorite, removeFavorite } = useApp();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await CharactersService.fetchAll({
          page,
          filter: {
            name: router.query.name as string,
            status: router.query.status as string,
            species: router.query.species as string,
            gender: router.query.gender as string,
          },
        });
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setCharacters({} as IAPIResponse<ICharacter[]>);
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();
  }, [router.query]);

  const handleInfinityScroll = () => {
    setPage(page + 1);

    const fetchData = async () => {
      const { data } = await CharactersService.fetchAll({
        page: page + 1,
        filter: {
          name: router.query.name as string,
          status: router.query.status as string,
          species: router.query.species as string,
          gender: router.query.gender as string,
        },
      });
      setCharacters({
        info: data.info,
        results: [...characters.results, ...data.results],
      });
    };

    fetchData();
  };

  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const query = {
      ...(data.name && { name: data.name }),
      ...(data.status && { status: data.status }),
      ...(data.species && { species: data.species }),
      ...(data.gender && { gender: data.gender }),
    };

    router.push({
      pathname: "/characters",
      query: {
        ...query,
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
    <Layout title="Rick and Morty - Characters">
      <BackgroundBloom />
      <Styled.Container>
        <Styled.FilterSection>
          <Typography fontWeight="600" margin="0">
            filter by
          </Typography>

          <Styled.FilterContainer>
            <Styled.InputGroup>
              <Typography fontWeight="600" margin="0">
                name
              </Typography>
              <Input.Root>
                <Input.Input
                  type="text"
                  placeholder="type the name"
                  defaultValue={router.query.name as string}
                  {...register("name")}
                />
              </Input.Root>
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Typography fontWeight="600" margin="0">
                status
              </Typography>
              <Select
                {...register("status")}
                defaultValue={router.query.status || ""}
              >
                <option value="">all</option>
                <option value="alive">alive</option>
                <option value="dead">dead</option>
                <option value="unknown">unknown</option>
              </Select>
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Typography fontWeight="600" margin="0">
                species
              </Typography>
              <Select
                {...register("species")}
                defaultValue={router.query.species || ""}
              >
                <option value="">all</option>
                <option value="human">human</option>
                <option value="alien">alien</option>
              </Select>
            </Styled.InputGroup>
            <Styled.InputGroup>
              <Typography fontWeight="600" margin="0">
                gender
              </Typography>

              <Select
                {...register("gender")}
                defaultValue={router.query.gender || ""}
              >
                <option value="">all</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
              </Select>
            </Styled.InputGroup>

            <Button onClick={handleSubmit(onSubmit)}>apply filters</Button>
          </Styled.FilterContainer>
        </Styled.FilterSection>
        <Styled.CharactersSection>
          <Styled.CharactersHeader>
            <Typography fontWeight="600" size="xl" margin="0" className="title">
              characters
            </Typography>

            <Typography fontWeight="600" margin="0" className="results">
              {(characters && characters.info && characters.info.count) || "0"}{" "}
              results
            </Typography>
          </Styled.CharactersHeader>
          {loading && (
            <Styled.CharactersContainer>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {[...Array(10)].map((_, index) => (
                  <Skeleton
                    key={String(index + Math.floor(Math.random() * 3000 + 1))}
                    width={290}
                    height={290}
                  />
                ))}
              </SkeletonTheme>
            </Styled.CharactersContainer>
          )}

          {!loading && !characters.results && (
            <Typography>No character found</Typography>
          )}
          {!loading && characters && characters.results && (
            <Styled.CharactersContainer
              // @ts-expect-error
              as={InfiniteScroll}
              dataLength={characters.results.length}
              next={handleInfinityScroll}
              hasMore={!loading && characters.info.next ? true : false}
              loader={
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {[...Array(10)].map((_, index) => (
                    <Skeleton
                      key={String(index + Math.floor(Math.random() * 3000 + 1))}
                      width={290}
                      height={290}
                    />
                  ))}
                </SkeletonTheme>
              }
            >
              {characters.results.map((character) => (
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
                  maxW="290px"
                  handleToggleFavorite={() => handleFavorite(character)}
                />
              ))}
            </Styled.CharactersContainer>
          )}
        </Styled.CharactersSection>
      </Styled.Container>
    </Layout>
  );
}
