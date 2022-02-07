import styled, { css } from "styled-components";

import icon5 from "../../assets/icons/bed.svg";
import icon4 from "../../assets/icons/check.svg";
import icon1 from "../../assets/icons/paper-plane.svg";
import icon3 from "../../assets/icons/pen.svg";
import icon2 from "../../assets/icons/play-circle.svg";
import icon0 from "../../assets/icons/table.svg";

const icons = [icon0, icon1, icon2, icon3, icon4, icon5];

export const Container = styled.div`
  input[type="checkbox"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

export const FilterItems = styled.span<{
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 20px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const SvgIcon = styled.p<{
  id?: string;
}>`
  ${({ id }) => css`
    min-width: 23px;
    height: 23px;
    margin-right: 11px;
    z-index: 2;

    background-image: url(${icons[id]});
  `}
`;

export const Name = styled.p<{
  active?: boolean;
}>`
  ${({ active, theme }) => css`
    color: ${active ? theme.colors.colorBlock : theme.colors.colorTextName};
    font-weight: ${active ? "bold" : 400};
    width: 121px;

    &:hover {
      color: ${({ theme }) => theme.colors.colorBlock};
      font-weight: ${active ? "bold" : 400};
    }
  `}
`;

export const Number = styled.p<{
  active?: boolean;
}>`
  ${({ active, theme }) => css`
    color: #9196ab;
    font-size: 13px;
    text-align: center;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    padding: 3.5px;

    background: ${active ? theme.colors.colorBlock : "#E4E6F1"};
    color: ${active ? theme.colors.colorBg : theme.colors.colorTextName};
    font-weight: ${active ? "bold" : 400};
  `}
`;
