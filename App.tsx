import WelcomePage  from './components/index';
//import { StatusBar } from 'expo-status-bar';
import Signup from './components/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './global.css';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
    
      <Stack.Screen 
        name="Signup"
        component={Signup}

      />
     </Stack.Navigator>
    </NavigationContainer>
  );
}
