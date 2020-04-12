import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAvoidingView, Keyboard } from 'react-native';

import { Question } from '../Question';

export const PseudoSociety: React.FC = () => {
  return (
    <KeyBoardContainer behavior="padding">
      <Container onPress={Keyboard.dismiss}>
        <Inner>
          <HeaderContainer>
            <Title>PseudoSociety</Title>
          </HeaderContainer>
          <Question />
        </Inner>
      </Container>
    </KeyBoardContainer>
  );
};

const KeyBoardContainer = styled(KeyboardAvoidingView)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 60px;
`;

const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.1;
`;

const Title = styled.Text`
  font-size: 24px;
`;

const Container = styled.TouchableWithoutFeedback``;

const Inner = styled.View``;
