import styled from "styled-components";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

interface ICharacterCardProps {
  image: string;
  maxW?: string;
}
export const CharacterCard = styled(Link)<ICharacterCardProps>`
  width: 100%;
  max-width: ${({ maxW }) => (maxW ? maxW : "300px")};

  min-height: 300px;
  background: url(${({ image }) => image}) no-repeat center center;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 1.6s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  border: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  color: ${({ theme }) => theme.colors.text.light};

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

export const CharacterCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  padding: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text.gray};
    margin: 0;
    margin-top: 16px;
    padding: 0;
  }
`;

export const Tooltip = {
  Content: styled(RadixTooltip.Content)`
    background: ${({ theme }) => theme.colors.background};
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.shape};
  `,
  Arrow: styled(RadixTooltip.Arrow)`
    fill: ${({ theme }) => theme.colors.background};
  `,
};
