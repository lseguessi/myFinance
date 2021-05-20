import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';

export default function SingIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassaword] = useState('');

  const { singUp, loadingAuth } = useContext(AuthContext);

  function handleSignUP() {
    singUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            autocorrent={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => {
              setNome(text);
            }}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autocorrent={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autocorrent={false}
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassaword(text);
            }}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUP}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
