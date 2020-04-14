import { produce } from 'immer';
import React, { useState } from 'react';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import { KeyboardAvoidingView, Keyboard } from 'react-native';

import Firebase from '../firebase';

interface AuthData {
  email: string;
  password: string;
}

type AuthDataAction = (b: Readonly<AuthData>) => AuthData;

export const Login: React.FC = (props: any) => {
  const [authState, setAuthState] = useState<AuthData>({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const loggedIn = await submitLogin(authState);

    if (loggedIn) {
      props.history.push('/games');
    }
  };

  return (
    <KeyBoardContainer>
      <Container onPress={Keyboard.dismiss}>
        <LoginContainer>
          <LoginInput
            value={authState.email}
            onChangeText={(email) => setAuthState(updateAuthEmail(email))}
            placeholder="Email"
            autoCapitalize="none"
          />
          <LoginInput
            value={authState.password}
            onChangeText={(password) =>
              setAuthState(updateAuthPassword(password))
            }
            placeholder="Password"
            secureTextEntry={true}
          />
          <ActionsContainer>
            <SubmitActionContainer onPress={handleLogin}>
              <SubmitLogin>
                <ActionText>Login</ActionText>
              </SubmitLogin>
            </SubmitActionContainer>
            <Link to="/signup">
              <SubmitSignUp>
                <ActionText>Sign up</ActionText>
              </SubmitSignUp>
            </Link>
          </ActionsContainer>
        </LoginContainer>
      </Container>
    </KeyBoardContainer>
  );
};

const submitLogin = async ({ email, password }: AuthData) => {
  try {
    const response = await Firebase.auth().signInWithEmailAndPassword(
      email,
      password
    );

    console.log('response', response);
    if (response?.user?.uid) {
      return true;
    }
  } catch (err) {
    console.log('error', err);
  }
};

function updateAuthEmail(email: string): AuthDataAction {
  return produce((draft: AuthData) => {
    draft.email = email;
  });
}

function updateAuthPassword(password: string): AuthDataAction {
  return produce((draft: AuthData) => {
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
