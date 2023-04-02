import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.shape};
  border-radius: 1rem;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.gray};
  font-size: 1rem;
  outline: none;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export { Root, Input, Icon };
