import React, { useState } from 'react';
import styled from 'styled-components/native';

export const Question: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <QuestionContainer>
      <QuestionTitle>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </QuestionTitle>
      <AnswerInput value={value} onChangeText={(answer) => setValue(answer)} />
      <SubmitAnswerContainer onPress={() => alert(value)}>
        <SubmitAnswer>
          <SubmitAnswerText>Submit</SubmitAnswerText>
        </SubmitAnswer>
      </SubmitAnswerContainer>
    </QuestionContainer>
  );
};

const AnswerInput = styled.TextInput`
  width: 100%;
  background: #fff;
  height: 160px;
  font-size: 32px;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
`;

const SubmitAnswerContainer = styled.TouchableOpacity``;

const SubmitAnswer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 140px;
  border-radius: 4px;
  background: #ffa4ff;
`;

const SubmitAnswerText = styled.Text`
  color: #fff;
`;

const QuestionContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 20px 20px;
`;
const QuestionTitle = styled.Text`
  text-align: center;
`;
