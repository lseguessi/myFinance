import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

export default function SingIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassaword] = useState('');
  const { singIn, loadingAuth } = useContext(AuthContext);
  console.log('SignIn: ' + loadingAuth);

  function handleLogin() {
    singIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../assets/Logo.png')} />

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

        <SubmitButton onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SingUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
