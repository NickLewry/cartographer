import React from 'react';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import { GameIcon } from './GameIcon';

interface Props {
  games: string[];
}

const games = [
  'Psuedo Society',
  'Another game',
  'Another game 2',
  'Another game 3',
  'Another game 4',
  'Another game 5',
  'Another game 6',
  'Another game 7',
];

export const Games: React.FC<Props> = () => {
  return (
    <Container>
      <Link to="/">
        <Title>Back</Title>
      </Link>
      <GamesContainer>
        {games.map((game, i) => (
          <GameIcon game={game} key={i} />
        ))}
      </GamesContainer>
    </Container>
  );
};
const Container = styled.View``;

const GamesContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
  margin-top: 20px;
`;

const Title = styled.Text`
  margin-top: 50px;
  margin-left: 8px;
`;
