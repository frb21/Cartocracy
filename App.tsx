import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import WelcomePage from './components/index';
import SignUp from './components/signup';
import SignIn from './components/login';

import './global.css';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'inter-bold': require('./assets/fonts/Inter_18pt-Bold.ttf'),
    'inter-semibold': require('./assets/fonts/Inter_18pt-SemiBold.ttf'),
    'inter-regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
