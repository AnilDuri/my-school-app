import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (<>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='signUp' component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}