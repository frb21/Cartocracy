import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePass = () => {
    setShowPassword(!showPassword);
  };

  return ( 
    <View className="flex-1 bg-white items-center">
      <View className="right-2 top-14">
        
        {/* Logo */}
        <View className="flex-row items-center right-3">
          <Image source={require('../assets/logo.png')} className="w-[280] h-[50]"></Image>
        </View>

        {/* Header text */}
        <View className="mx-8 my-6">  
          <Text className="text-5xl mb-1 font-['inter-bold']">Sign in to your Account</Text>
          <Text className="text-lg font-['inter-regular']">Enter your email and password to log in</Text>
        </View>

        {/*Email input*/}
          <View className="mx-8 mb-5">
            <Text className="font-['inter-semibold'] text-md mb-2 ">Email</Text>
            <TextInput 
              placeholder='Enter your email'
              keyboardType='email-address'
              autoCapitalize='none'
              autoComplete='email'
              className="border-2 border-gray-400 px-3 h-15 rounded-md text-md"
            />
          </View>

          {/* Password Input */}
          <View className="mx-8 mb-lg">
            <Text className="font-['inter-semibold'] text-md mb-2">Password</Text>
            <TextInput 
              placeholder='Enter your password'
              secureTextEntry={showPassword}
              autoCapitalize='none'
              className='border-2 border-gray-400 px-3 h-15 rounded-md text-md'
            />

            {/* Show Password */}
            <TouchableOpacity onPress={togglePass}>
              <Icon 
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color="#000"
                className="absolute right-[5%] bottom-4"
              />
            </TouchableOpacity>
          </View>
     
          <TouchableOpacity className="mt-3 left-[58%]">
            <Text className="font-['inter-regular'] text-blue-700">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-5 bg-blue-500 p-4 items-center rounded-xl left-11 w-80">
            <Text className="font-['inter-regular'] text-white">Login</Text>
          </TouchableOpacity>   

          {/* or text */}
          <Text className="text-center my-9 text-gray-600 text-md font-['inter-regular']">or</Text>

      </View>
    </View>
  );
};

export default Signup;
