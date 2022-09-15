import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import ForgotPassword from './screens/ForgotPassword';
import LoginScreen from './screens/Login';
import RegisterChildScreen from './screens/RegisterChildScreen';
import SignUpScreen from './screens/SignUp';
import Calendar from './screens/TabScreens/Calendar';
import Finance from './screens/TabScreens/Finance';
import HomeTab from './screens/TabScreens/HomeTab';
import Messages from './screens/TabScreens/Messages';
import Notices from './screens/TabScreens/Notices';
import { store } from './store/store'

export default function App() {

  const Tab = createBottomTabNavigator();

  const TabScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false, tabBarIconStyle: { display: 'none' } }} />
        <Tab.Screen name="Notices" component={Notices} options={{ headerShown: false, tabBarIconStyle: { display: 'none' } }} />
        <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarIconStyle: { display: 'none' } }} />
        <Tab.Screen name="Messages" component={Messages} options={{ tabBarIconStyle: { display: 'none' } }} />
        <Tab.Screen name="Finance" component={Finance} options={{ tabBarIconStyle: { display: 'none' } }} />
      </Tab.Navigator>
    );
  }


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
          <Stack.Screen name='tab' component={TabScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>
  );
}