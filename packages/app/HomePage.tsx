import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const HomePage: React.FC<any> = () => {
  return (
    <Container>
      <Header></Header>
      <Title>Socially Distant</Title>
      <GamesContainer>
        <Games>
          <Game></Game>
        </Games>
        <GameActionsContainer>
          <StartButtonContainer to="/pseudo-society">
            <ButtonText>New Game</ButtonText>
          </StartButtonContainer>
          <JoinButtonContainer onPress={() => Alert.alert('Joining game...')}>
            <ButtonText>Join game</ButtonText>
          </JoinButtonContainer>
        </GameActionsContainer>
      </GamesContainer>
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Header = styled.View`
  margin: 40px 0;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: 'Verdana';
`;

const GamesContainer = styled.View`
  margin: 60px 0;
`;

const Games = styled.View``;

const Game = styled.View`
  height: 300px;
  width: 280px;
  border: 1px solid black;
  border-radius: 6px;
`;

const GameActionsContainer = styled.View`
  display: flex;
  align-items: center;
  margin: 60px 0 20px;
`;

const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 200px;
  margin: 10px 0;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const StartButtonContainer = styled(ButtonContainer)`
  background: #ffbdbd;
`;

const JoinButtonContainer = styled(ButtonContainer)`
  background: #c9c9ff;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Verdana-Bold';
`;
