import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -40%;
  left: -20%;
  width: 100vh;
  height: 100vh;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;
