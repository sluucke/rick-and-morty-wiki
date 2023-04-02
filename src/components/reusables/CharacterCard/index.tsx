import * as Tooltip from "@radix-ui/react-tooltip";
import * as Styled from "./styles";
import { Activity, Star } from "react-feather";
import { GiDeadHead } from "react-icons/gi";
import { BiQuestionMark } from "react-icons/bi";
import { Box } from "../Box";
import { useApp } from "@/hooks/useApp";
import { Button } from "../Button";

interface ICharacterCard {
  name: string;
  image: string;
  status: string;

  href: string;
  canFavorite?: boolean;
  isFavorite?: boolean;
  maxW?: string;
  handleToggleFavorite?: () => void;
}

export const CharacterCard = ({
  name,
  image,
  status,
  href,
  canFavorite = true,
  isFavorite = false,
  maxW = "300px",
  handleToggleFavorite,
}: ICharacterCard): JSX.Element => {
  const statusIcons = {
    Alive: <Activity size="24" />,
    Dead: <GiDeadHead size="24" />,
    unknown: <BiQuestionMark size="24" />,
  };

  return (
    <Styled.CharacterCard maxW={maxW} href={href} image={image}>
      <Styled.CharacterCardInfo>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Box display="flex" p="2" borderRadius="100%" bg="#23232350">
                  {statusIcons[status as keyof typeof statusIcons]}
                </Box>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Styled.Tooltip.Content sideOffset={5}>
                  {status}
                  <Styled.Tooltip.Arrow />
                </Styled.Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          {canFavorite && (
            <Button
              variant="text"
              display="flex"
              p="2"
              borderRadius="100%"
              background="#23232350"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleFavorite && handleToggleFavorite();
              }}
              style={{
                zIndex: 3,
              }}
            >
              <Star
                size="24"
                color={isFavorite ? "#FFD700" : "#fff"}
                fill={isFavorite ? "#FFD700" : "transparent"}
              />
            </Button>
          )}
        </Box>
        <h3>{name}</h3>
      </Styled.CharacterCardInfo>
    </Styled.CharacterCard>
  );
};
