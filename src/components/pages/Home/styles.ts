import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const HeroContainer = styled.div`
  flex: 1;
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;

  height: 80vh;

  img {
    width: 150%;
  }

  @media (max-width: 1024px) {
    height: 50vh;
    width: 90vw;
  }
`;

export const Section = styled.section`
  @media (max-width: 1024px) {
    margin-top: 8rem;
  } ;
`;

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
  } ;
`;

export const ContentContainer = styled.div`
  margin-top: 1rem;
  width: 60%;

  .view-characters-button {
    width: 75%;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
