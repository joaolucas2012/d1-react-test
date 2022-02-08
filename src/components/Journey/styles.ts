import styled from "styled-components";

export const Container = styled.div`
  margin: 35px auto;

  @media screen and (max-width: 825px) {
    margin-left: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 50px;

  > span {
    font-family: "Gotham-Book";
    color: ${({ theme }) => theme.colors.colorJourneys};
    font-size: 14px;
  }
`;

export const JourneyName = styled.span`
  width: 230px;
  margin-left: -30px;
  margin-right: -107px;

  @media screen and (max-width: 825px) {
    margin-right: -140px;
    padding-left: -3;
  }
`;

export const JourneyRecipient = styled.span`
  margin-left: 49px;

  @media screen and (max-width: 825px) {
    margin-left: 10px;
  }
`;

export const JourneySuccess = styled.span`
  margin-right: 7px;

  @media screen and (max-width: 825px) {
    padding-left: 10px;
  }
`;

export const JourneyStatus = styled.span`
  margin-right: 92px;

  @media screen and (max-width: 825px) {
    padding-left: 5px;
  }
`;
