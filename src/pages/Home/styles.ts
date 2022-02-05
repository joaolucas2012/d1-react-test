import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBackground};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
