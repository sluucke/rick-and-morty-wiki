import { IAPIResponse } from "@/interfaces/APIResponse";
import { ICharacter } from "@/interfaces/Character";
import CharactersService from "@/services/CharactersService";
import {
  useCallback,
  useMemo,
  useState,
  createContext,
  useEffect,
} from "react";

interface IAppContext {
  characters: IAPIResponse<ICharacter[]>;
  favorites: ICharacter[];
  setCharacters: React.Dispatch<
    React.SetStateAction<IAPIResponse<ICharacter[]>>
  >;
  addFavorite: (character: ICharacter) => void;
  removeFavorite: (character: ICharacter) => void;
}

const Context = createContext<IAppContext>({
  characters: {} as IAPIResponse<ICharacter[]>,
  favorites: [],
  setCharacters: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<IAPIResponse<ICharacter[]>>(
    {} as IAPIResponse<ICharacter[]>
  );
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await CharactersService.fetchAll({});

        setCharacters(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    if (!characters.results) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", JSON.stringify([]));
      }
      const favorites = localStorage.getItem("favorites");
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    }
  }, []);

  const addFavorite = useCallback(
    (character: ICharacter) => {
      const newFavorites = [...favorites, character];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  const removeFavorite = useCallback(
    (character: ICharacter) => {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== character.id
      );
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  const values = useMemo(
    () => ({
      characters,
      favorites,
      setCharacters,
      addFavorite,
      removeFavorite,
    }),
    [characters, favorites, setCharacters, addFavorite, removeFavorite]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default {
  Context,
  Provider,
};
