/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import {
  Body,
  Container,
  Cover,
  DoneButton,
  ExitButton,
  Footer,
  ModalShadow,
  Title,
} from "./styles";

interface IModal {
  trigger: () => void;
  isOpened: boolean;
}

const Modal = ({ trigger, isOpened }: IModal) => (
  <>
    {isOpened && (
      <>
        <ModalShadow />

        <Container>
          <Cover>
            <Title>
              <h3>Nova Jornada</h3>
            </Title>

            <Body>
              <label>
                Dê um <strong>nome</strong> para essa Jornada
              </label>

              <input />

              <label>Você poderá alterar essa informação depois.</label>
            </Body>

            <Footer>
              <DoneButton type="button" onClick={trigger}>
                <span>Continuar</span>
              </DoneButton>

              <ExitButton type="button" onClick={trigger}>
                <span>Cancelar</span>
              </ExitButton>
            </Footer>
          </Cover>
        </Container>
      </>
    )}
  </>
);

export default Modal;
