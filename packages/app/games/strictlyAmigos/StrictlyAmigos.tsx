import React from 'react';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const StrictlyAmigos: React.FC = () => {
  return (
    <Container>
      <Title>Strictly Amigos</Title>
      <Link to="/">
        <LinkText>Home</LinkText>
      </Link>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Title = styled.Text`
  margin-bottom: 40px;
`;
const LinkText = styled.Text``;
