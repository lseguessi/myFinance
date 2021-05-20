import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SingUp';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="SingIn"
                component={SingIn}
            />

            <AuthStack.Screen
            options={{
                headerStyle: {
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}
                name="SingUp"
                component={SingUp}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;