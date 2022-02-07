import styled, { css } from "styled-components";

import icon4 from "../../assets/icons/bed.svg";
import icon5 from "../../assets/icons/check.svg";
import icon1 from "../../assets/icons/paper-plane.svg";
import icon3 from "../../assets/icons/pen.svg";
import icon2 from "../../assets/icons/play-circle.svg";

const icons = [icon1, icon2, icon3, icon4, icon5];

export const Container = styled.span`
  font-family: "Gotham-Book";
  color: #3e4157;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 150px;

  margin-right: 10px;
  @media screen and (max-width: 825px) {
    white-space: nowrap;
    position: absolute;
    left: 338px;
  }
`;

export const Status = styled.div<{
  status: string;
}>`
  ${({ status }) => css`
    width: 20px;
    height: 20px;
    margin-right: 9px;
    margin-bottom: 1px;

    background-image: url(${icons[+status - 1]});
    background-position: center;
    background-repeat: no-repeat;
  `}
`;
