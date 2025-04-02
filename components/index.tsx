/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useRef, useEffect } from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const WelcomePage = () => {
   const navigation = useNavigation();
   const [currentIndex, setCurrentIndex] = useState(0);
   const fadeAnim = useRef(new Animated.Value(0)).current;

   const data = [
        {id: '1', text: "It's Not Just Shopping, \nIt's Shaping Politics!"},
        {id: '2', text: "Join us in making \ninformed choices \nand shaping the future."},
        {id: '3', text: "Together, we can build\n a political landscape \nthat works\n for everyone."},
   ];

   useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);


   const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
   };

   return (
    <LinearGradient
      colors={['#c9b07d', '#ffddc1', '#ffb385']}
      className="flex-1 justify-center items-center"
    >
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleScroll(event)}
        renderItem={() => (
          <View className="flex-1 -m-1  p-6 justify-center items-center">      
            <Animated.Text
                style={{ opacity: fadeAnim }}
                className="text-4xl text-center font-bold text-black"
            >
            {data[currentIndex].text}
            </Animated.Text>       
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
            
      <View className="flex-row mt-2">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 mx-1 bottom-8 rounded-full ${
              currentIndex === index ? 'w-4 bg-blue-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </View>

      <TouchableOpacity 
        className="bg-blue-500 px-5 py-2 rounded-lg mt-3 mb-3"
        onPress={() => navigation.navigate("Signup")}
      >
        <Text className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins_700Bold' }}>
          Get Started
        </Text>
      </TouchableOpacity> 
   </LinearGradient>
  );
};

export default WelcomePage;




