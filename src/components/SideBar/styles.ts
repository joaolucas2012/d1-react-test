import Tooltip from "react-simple-tooltip";

import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.colorSidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 71px;
  padding: 35px 0;
  left: 0;

  > img {
    width: 50%;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const blueEffect = css`
  background-image: linear-gradient(
    to right,
    rgb(0, 225, 255),
    rgb(17, 126, 255)
  );
`;

const blueDivider = css`
  position: absolute;
  height: 3px;
  width: 100%;
  margin: 18px;
`;

export const BorderTop = styled.span`
  ${blueEffect};
  ${blueDivider};
  top: -18px;
`;

export const BorderBottom = styled.span`
  ${blueEffect};
  ${blueDivider};
  bottom: -18px;
`;

export const BorderMiddle = styled.span`
  ${blueEffect};
  display: inline-block;
  height: 1.9px;
  width: 24px;
  margin: 18px 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-top: 67.8px;
  align-items: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconsItem = styled.div`
  margin: 16px 0;

  > img {
    height: 25px;
    width: 25px;
  }
`;

export const StyledTooltip = styled(Tooltip)`
  white-space: nowrap;
`;
