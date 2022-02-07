import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBg};
  display: flex;
  justify-content: center;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
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

export const Content = styled.div`
  position: absolute;
  display: flex;
  top: 155px;
  width: 80%;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    display: inline;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #3e4157;
    margin-bottom: 5vh;
  }

  @media screen and (max-width: 1250px) {
    align-items: center;
    padding: 13px;
    position: relative;

    margin: 0 90px 0 146px;

    h2 {
      position: absolute;
      margin-top: -40px;
    }
  }
`;

export const JourneysWrapper = styled.div`
  position: relative;
  top: 50px;
  right: 50px;

  @media screen and (max-width: 1250px) {
    display: flex;
    justify-content: center;
    align-items: center;
    top: -20px;
    width: 100%;
    right: -30px;
  }

  @media screen and (max-width: 870px) {
    left: 33px;
  }
`;
