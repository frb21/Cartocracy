import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigation = useNavigation();

  const togglePass1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePass2 = () => {
    setShowPassword2(!showPassword2);
  };


  return ( 
    <View className="flex-1 bg-white">
      <View className="top-14">
        
        {/* Header text */}
        <View className="mx-8 my-6">  
          <Text className="text-5xl mb-1 font-['inter-bold']">Sign Up</Text>
          <Text className="text-lg font-['inter-regular']">Create an account to continue</Text>
        </View>

        {/*Email input*/}
          <View className="mx-8 mb-5">
            <Text className="font-['inter-semibold'] text-md mb-2 ">Full Name</Text>
            <TextInput 
              placeholder='Enter your full name'
              keyboardType='email-address'
              autoCapitalize='none'
              autoComplete='email'
              className="border-2 border-gray-400 px-3 h-15 rounded-md text-md"
            />
          </View>

          {/* Password Input */}
          <View className="mx-8 mb-5">
            <Text className="font-['inter-semibold'] text-md mb-2">Email</Text>
            <TextInput 
              placeholder='Enter your email'
              autoCapitalize='none'
              className='border-2 border-gray-400 px-3 h-15 rounded-md text-md'
            />
          </View>

          <View className="mx-8 mb-5">
            <Text className="font-['inter-semibold'] text-md mb-2">Password</Text>
            <TextInput 
              placeholder='Enter your password'
              secureTextEntry={showPassword1}
              autoCapitalize='none'
              className='border-2 border-gray-400 px-3 h-15 rounded-md text-md'
            />

            <TouchableOpacity onPress={togglePass1}>
              <Icon 
                name={showPassword1 ? 'eye-slash' : 'eye'}
                size={20}
                color="#000"
                className="absolute right-[5%] bottom-4"
              />
            </TouchableOpacity>
          </View>
     
        <View className="mx-8 mb-10">
            <Text className="font-['inter-semibold'] text-md mb-2">Confirm Password</Text>
            <TextInput 
              placeholder='Confirm your password'
              secureTextEntry={showPassword2}
              autoCapitalize='none'
              className='border-2 border-gray-400 px-3 h-15 rounded-md text-md'
            />

            <TouchableOpacity onPress={togglePass2}>
              <Icon 
                name={showPassword2 ? 'eye-slash' : 'eye'}
                size={20}
                color="#000"
                className="absolute right-[5%] bottom-4"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="mt-5 bg-blue-500 p-4 items-center rounded-3xl left-11 w-80">
            <Text className="font-['inter-regular'] text-white">Register</Text>
          </TouchableOpacity>  

          <View className="flex-row items-center justify-center mt-10 gap-1">
            <Text className="font-['inter-semibold']">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text className="font-['inter-regular'] text-blue-400">Login</Text></TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default SignUp;
