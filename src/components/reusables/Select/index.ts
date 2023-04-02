import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 0.675rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.gray};
  border: 1px solid ${({ theme }) => theme.colors.shape};
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  option {
    color: ${({ theme }) => theme.colors.text.gray};
    background: ${({ theme }) => theme.colors.shape};
  }
`;
