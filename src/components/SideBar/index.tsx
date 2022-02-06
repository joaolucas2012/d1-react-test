import React from "react";

import ccmCloudIcon from "../../assets/icons/ccm-cloud.svg";
import chartPieIcon from "../../assets/icons/chart-pie.svg";
import exchangeIcon from "../../assets/icons/exchange-alt.svg";
import externalLinkIcon from "../../assets/icons/external-link-alt-solid.svg";
import gemIcon from "../../assets/icons/gem.svg";
import rocketIcon from "../../assets/icons/rocket.svg";
import signOutIcon from "../../assets/icons/sign-out-alt.svg";
import toolsIcon from "../../assets/icons/tools.svg";
import userFriendsIcon from "../../assets/icons/user-friends.svg";
import whiteLogo from "../../assets/images/logotipo-branco.png";
import {
  Container,
  BorderTop,
  BorderBottom,
  IconsContainer,
  IconsWrapper,
  IconsItem,
  BorderMiddle,
  StyledTooltip,
} from "./styles";

const Sidebar = () => (
  <Container>
    <BorderTop />

    <img src={whiteLogo} alt="Logo branca" />

    <IconsContainer>
      <IconsWrapper>
        <StyledTooltip
          content="Análises"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
        >
          <IconsItem>
            <img src={chartPieIcon} alt="Análises" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="Jornadas"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
        >
          <IconsItem>
            <img src={rocketIcon} alt="Jornadas" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="Clientes"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
        >
          <IconsItem>
            <img src={userFriendsIcon} alt="Clientes" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="CCM Cloud"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
          className="noWrapIcon"
        >
          <IconsItem>
            <img src={ccmCloudIcon} alt="CCM Cloud" />
          </IconsItem>
        </StyledTooltip>

        <BorderMiddle />

        <StyledTooltip
          content="Versão 01"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
          className="noWrapIcon"
        >
          <IconsItem>
            <img src={externalLinkIcon} alt="Versão 01" />
          </IconsItem>
        </StyledTooltip>
      </IconsWrapper>

      <IconsWrapper>
        <StyledTooltip
          content="Administração"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
        >
          <IconsItem>
            <img src={gemIcon} alt="Administração" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="Help Desk"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
          className="noWrapIcon"
        >
          <IconsItem>
            <img src={toolsIcon} alt="Help Desk" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="Trocar Conta"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
          className="noWrapIcon"
        >
          <IconsItem>
            <img src={exchangeIcon} alt="Trocar Conta" />
          </IconsItem>
        </StyledTooltip>

        <StyledTooltip
          content="Sair"
          fontSize="15"
          placement="right"
          background="#FFFF"
          color="#9196Ab"
          padding={10}
          border="none"
          radius={8}
        >
          <IconsItem>
            <img src={signOutIcon} alt="Sair" />
          </IconsItem>
        </StyledTooltip>
      </IconsWrapper>
    </IconsContainer>
    <BorderBottom />
  </Container>
);

export default Sidebar;
