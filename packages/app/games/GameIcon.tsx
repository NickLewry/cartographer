import React, { useState } from 'react';
import styled from 'styled-components/native';

import { GameModal } from './GameModal';

interface Props {
  game: string;
}

export const GameIcon: React.FC<Props> = ({ game }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Container>
      <Title>{game}</Title>
      <PlayGameContainer onPress={() => setSelected(true)}>
        <Anoth>
          <PlayGame>Play Game</PlayGame>
        </Anoth>
      </PlayGameContainer>
      <GameModal text={game} show={selected} setSelected={setSelected} />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 0 31%;
  margin: 8px;
  height: 260px;
  background-color: blue;
`;
const Title = styled.Text``;

const Anoth = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  height: 40px;
  width: 100px;
`;

const PlayGameContainer = styled.TouchableWithoutFeedback``;
const PlayGame = styled.Text`
  background: red;
`;
