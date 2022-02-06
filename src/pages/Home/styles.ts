import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBg};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -2px;
  height: 100px;
  width: 80%;
  max-width: 100%;
  align-items: center;
`;
