import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBg};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
