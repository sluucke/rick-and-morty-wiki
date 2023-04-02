import styled from "styled-components";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const FilterSection = styled.section`
  width: 100%;
  max-width: 20%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  /* background: ${({ theme }) => theme.colors.shape}; */

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
    padding: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CharactersSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

export const CharactersHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    /* flex-direction: column; */
    .results {
      font-size: 0.675rem;
    }

    .title {
      font-size: 1.275rem;
    }

    gap: 1rem;
  }
`;

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
