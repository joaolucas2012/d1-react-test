import React, { useState } from "react";

import plusIcon from "../../assets/icons/plus.svg";
import acmeLogo from "../../assets/images/acme-logo.png";
import Modal from "../Modal";
import {
  CompanyLogo,
  Container,
  JourneyButton,
  LeftHeader,
  Lupa,
  RightHeader,
  StyledTooltip,
  User,
} from "./styles";

const Header = () => {
  const useModal = () => {
    const [isOpened, setIsOpened] = useState(false);
    const trigger = () => {
      setIsOpened(!isOpened);
    };
    return {
      isOpened,
      trigger,
    };
  };

  const { isOpened, trigger } = useModal();

  return (
    <Container>
      <LeftHeader>
        <StyledTooltip
          content="Antônio da Silva"
          fontSize="15"
          placement="right"
          background="#3E4157"
          color="#FFFF"
          padding={10}
          border="none"
          radius={8}
        >
          <User>A</User>
        </StyledTooltip>
        <CompanyLogo>
          <img src={acmeLogo} alt="Logo da empresa" />
        </CompanyLogo>
      </LeftHeader>

      <RightHeader>
        <input type="text" placeholder="Buscar" />

        <Lupa />

        <JourneyButton type="button" onClick={trigger}>
          <img src={plusIcon} alt="Adicione uma Nova Jornada" />
          Nova Jornada
        </JourneyButton>

        <Modal trigger={trigger} isOpened={isOpened} />
      </RightHeader>
    </Container>
  );
};

export default Header;
