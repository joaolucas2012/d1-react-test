import styled, { css } from "styled-components";

export const ModalShadow = styled.div`
  background: #1a1731;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0.5;
`;

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const Cover = styled.div`
  background: #ffffff;
  border-radius: 10px;
  max-width: 460px;
  padding: 30px;
  margin: 200px auto;
`;

export const Title = styled.div`
  > h3 {
    display: flex;
    justify-content: flex-start;
    color: #9196ab;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorInput};
    padding: 0px 0px 17px 0px;
    margin-bottom: 30px;
  }

  > p {
    margin: 20px 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    margin: 7px 0;
    border: 2px solid ${({ theme }) => theme.colors.colorInput};
    background: #ffffff;
    height: 33px;
    border-radius: 7px;
  }

  label {
    font-family: "Gotham-Book";
    color: #3e4157;
  }
`;

const buttonStyles = css`
  border: none;
  padding: 5px;
  color: #9196ab;
  cursor: pointer;
  font-family: "Gotham-Bold";
  font-size: 17px;
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.colorBlock};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DoneButton = styled.button`
  ${buttonStyles}
  margin-right: 7px;
`;

export const ExitButton = styled.button`
  ${buttonStyles}
  margin-left: 7px;
`;
