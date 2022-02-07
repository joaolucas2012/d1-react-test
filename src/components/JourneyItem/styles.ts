import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;
  height: 45px;
  padding: 0 30px 0 20px;
  margin: 10px 0;

  width: 730px;

  > span {
    text-align: center;
  }

  @media screen and (max-width: 825px) {
    width: 10px;
    margin-left: -18px;
    padding: 0 60% 0 48%;
    position: relative;
  }
`;

export const ItemName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorTextName};
  text-align: left;
  width: 250px;

  @media screen and (max-width: 825px) {
    margin-left: -164px;
    width: 100px;
  }
`;

export const ItemRecipient = styled.div`
  margin-left: 42px;
  font-family: "Gotham-Book";
  color: #3e4157;
  font-size: 14px;
  width: 90px;

  @media screen and (max-width: 825px) {
    left: 128px;
    justify-content: center;
    position: absolute;
  }
`;

export const ItemSuccess = styled.div`
  font-family: "Gotham-Book";
  color: #3e4157;
  font-size: 14px;
  width: 50px;

  margin-left: 85px;
  margin-right: 85px;

  @media screen and (max-width: 825px) {
    position: absolute;
    left: 187px;
  }
`;
