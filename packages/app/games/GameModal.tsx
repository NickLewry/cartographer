import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

interface ModalProps {
  show: boolean;
  setSelected: any;
  text: string;
}

const Cont = styled.View`
  height: 70%;
  background: lightgrey;
`;
const ModalText = styled.Text``;
const ModalButton = styled.Button``;

export const GameModal: React.FC<ModalProps> = ({
  text,
  show,
  setSelected,
}) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={() => setSelected(false)}
      hasBackdrop={false}
      animationIn="pulse"
    >
      <Cont>
        <ModalText>{text}</ModalText>
        <ModalButton title="confirm" onPress={() => setSelected(false)} />
      </Cont>
    </Modal>
  );
};
