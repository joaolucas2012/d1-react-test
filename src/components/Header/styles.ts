import Tooltip from "react-simple-tooltip";

import styled from "styled-components";

import searchIcon from "../../assets/icons/search.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -2px;
  height: 100px;
  width: 80%;
  max-width: 100%;
  align-items: center;

  @media screen and (max-width: 750px) {
    display: block;
    margin: 15px 140px;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 750px) {
    margin: 0 60px 0 -60px;
    justify-content: center;
  }
`;

export const User = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.colorBlock};
  height: 23px;
  width: 25px;
  font-family: "Gotham-Bold";
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin-right: 15px;
  line-height: 23px;
`;

export const CompanyLogo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.colorLogo};
  text-align: center;
  height: 30px;
  width: 90px;
  padding: 3px 0;
  border-radius: 7px;
  background: #ffffff;

  > img {
    max-width: 66px;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 30%;

  > input {
    border: 2px solid ${({ theme }) => theme.colors.colorInput};
    height: 35px;
    width: 296px;
    border-radius: 5px;
    padding-left: 30px;
    cursor: pointer;

    @media screen and (max-width: 750px) {
      left: -60px;
      top: 19px;
    }
  }

  > input:hover {
    box-shadow: 0px 1px 4px 2px rgb(217, 219, 228);
  }

  @media screen and (max-width: 870px) {
    left: 10px;
  }
`;

export const Lupa = styled.span`
  height: 10px;
  width: 15px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  position: relative;
  right: 283px;

  @media screen and (max-width: 750px) {
    left: 12px;
    position: absolute;
  }
`;

export const JourneyButton = styled.button`
  background: ${({ theme }) => theme.colors.colorBlock};
  color: #ffffff;
  font-family: "Gotham-Bold";
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  width: 150px;
  padding: 0px 17px;
  margin-left: 15px;
  font-size: 13px;
  border: none;
  cursor: pointer;

  > img {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  &:hover {
    background-image: linear-gradient(
      to right,
      rgb(0, 225, 255),
      rgb(17, 126, 255)
    );
  }
`;

export const StyledTooltip = styled(Tooltip)`
  white-space: nowrap;
`;
