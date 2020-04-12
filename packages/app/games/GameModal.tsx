import React from 'react';
import Modal from 'react-native-modal';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

interface ModalProps {
  show: boolean;
  setSelected: any;
  text: string;
}

export const GameModal: React.FC<ModalProps> = ({
  text,
  show,
  setSelected,
}) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={() => setSelected(false)}
      animationIn="pulse"
      backdropOpacity={0.4}
    >
      <GameSelection>
        <GameTitle>{text}</GameTitle>
        <GameDescription>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </GameDescription>
        <ConfirmGame to="/pseudo-society" onPress={() => setSelected(false)}>
          <ModalText>Hey</ModalText>
        </ConfirmGame>
      </GameSelection>
    </Modal>
  );
};

const GameSelection = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  background: #fff;
  padding: 22px;
`;

const GameDescription = styled.Text``;

const ModalText = styled.Text``;

const GameTitle = styled.Text`
  font-size: 24px;
`;

const ConfirmGame = styled(Link)`
  width: 140px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
