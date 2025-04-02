import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useRef, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const WelcomePage = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const data = [
    { id: '1', text: "It's Not Just Shopping, \nIt's Shaping Politics!" },
    { id: '2', text: 'Join us in making \ninformed choices \nand shaping the future.' },
    {
      id: '3',
      text: 'Together, we can build\n a political landscape \nthat works\n for everyone.',
    },
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
      className="flex-1 items-center justify-center">
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleScroll(event)}
        renderItem={() => (
          <View className="-m-1 flex-1  items-center justify-center p-6">
            <Animated.Text
              style={{ opacity: fadeAnim }}
              className="text-center text-4xl font-bold text-black">
              {data[currentIndex].text}
            </Animated.Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View className="mt-2 flex-row">
        {data.map((_, index) => (
          <View
            key={index}
            className={`bottom-8 mx-1 h-2 w-2 rounded-full ${
              currentIndex === index ? 'w-4 bg-blue-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </View>

      <TouchableOpacity
        className="mb-3 mt-3 rounded-lg bg-blue-500 px-5 py-2"
        onPress={() => navigation.navigate('Signup')}>
        <Text className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins_700Bold' }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default WelcomePage;
