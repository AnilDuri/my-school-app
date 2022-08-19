import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import ForgotPassword from './screens/ForgotPassword';
import LoginScreen from './screens/Login';
import RegisterChildScreen from './screens/RegisterChildScreen';
import SignUpScreen from './screens/SignUp';
import TabScreen from './screens/TabScreen';
import { store } from './store/store'

export default function App() {

  const Stack = createNativeStackNavigator();
  return (<>
    <StatusBar style="auto" />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='signUp' component={SignUpScreen} />
          <Stack.Screen name='registerChild' component={RegisterChildScreen} />
          <Stack.Screen name='forgotPassword' component={ForgotPassword} />
          <Stack.Screen name='tab' component={TabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>
  );
}