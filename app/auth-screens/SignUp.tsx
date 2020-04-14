import { produce } from 'immer';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { KeyboardAvoidingView, Keyboard } from 'react-native';

import Firebase from '../firebase';

export interface SignUpData {
  displayName: string;
  email: string;
  password: string;
}

export type SignUpDataAction = (b: Readonly<SignUpData>) => SignUpData;

export const SignUp: React.FC = (props: any) => {
  const [authState, setAuthState] = useState<SignUpData>({
    displayName: '',
    email: '',
    password: '',
  });

  const handleSignUp = async () => {
    const loggedIn = await submitSignUp(authState);

    if (loggedIn) {
      props.history.push('/');
    }
  };

  return (
    <KeyBoardContainer>
      <Container onPress={Keyboard.dismiss}>
        <LoginContainer>
          <LoginInput
            value={authState.displayName}
            onChangeText={(displayName) =>
              setAuthState(updateDisplayName(displayName))
            }
            placeholder="Nickname"
            autoCapitalize="none"
          />
          <LoginInput
            value={authState.email}
            onChangeText={(email) => setAuthState(updateEmail(email))}
            placeholder="Email"
            autoCapitalize="none"
          />
          <LoginInput
            value={authState.password}
            onChangeText={(password) => setAuthState(updatePassword(password))}
            placeholder="Password"
            secureTextEntry={true}
          />
          <ActionsContainer>
            <SubmitActionContainer onPress={handleSignUp}>
              <SubmitLogin>
                <ActionText>Sign up</ActionText>
              </SubmitLogin>
            </SubmitActionContainer>
          </ActionsContainer>
        </LoginContainer>
      </Container>
    </KeyBoardContainer>
  );
};

const submitSignUp = async ({ email, password, displayName }: SignUpData) => {
  try {
    const userResponse = await Firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    );

    if (userResponse?.user?.uid) {
      const currentUser = Firebase.auth().currentUser;
      await currentUser?.updateProfile({ displayName });
      return true;
    }
  } catch (err) {
    console.log('error', err);
  }
};

function updateDisplayName(displayName: string): SignUpDataAction {
  return produce((draft: SignUpData) => {
    draft.displayName = displayName;
  });
}

function updateEmail(email: string): SignUpDataAction {
  return produce((draft: SignUpData) => {
    draft.email = email;
  });
}

function updatePassword(password: string): SignUpDataAction {
  return produce((draft: SignUpData) => {
    draft.password = password;
  });
}

const KeyBoardContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const Container = styled.TouchableWithoutFeedback``;

const LoginContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LoginInput = styled.TextInput`
  height: 10%;
  width: 80%;
  margin-bottom: 10%;
  border-color: #d3d3d3;
  border-bottom-width: 1px;
  text-align: center;
  font-size: 22px;
`;

const SubmitActionContainer = styled.TouchableOpacity``;

const ActionsContainer = styled.View`
  height: 20%;
  align-items: center;
  justify-content: space-between;
`;

const Submit = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 140px;
  border-radius: 4px;
  background: #ffa4ff;
`;

const ActionText = styled.Text`
  color: #fff;
`;

const SubmitLogin = styled(Submit)`
  background: #9dcdbf;
`;

const SubmitSignUp = styled(Submit)`
  width: 100px;
  background: #faafa0;
`;
