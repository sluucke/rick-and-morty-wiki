import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  img {
    border-radius: 0.5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CharacterImage = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 20vh;
  }
`;

export const CharacterInfo = styled.div`
  flex: 1;
  margin-left: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const Episodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;

    li {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;
