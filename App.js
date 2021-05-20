import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function financeiro() {
 return (
   <NavigationContainer> 
     <AuthProvider>
     <StatusBar backgroundColor="#131313" barStyle="light-content" />
     <Routes/>
     </AuthProvider>
   </NavigationContainer>
  );
}