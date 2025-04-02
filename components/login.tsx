import React from 'react'; 
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
  return (
    <View className="h-full w-full bg-white">
      <StatusBar style="light" />
      <Image className="absolute h-full w-full" source={require('../assets/double.png')} />
      <Text>Login </Text>
    </View>
  )
};
export default Login;
