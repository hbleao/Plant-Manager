import React from 'react';
import { 
  SafeAreaView,
  View,
  Text, 
  Image, 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';

import Button from '../../components/Button';

import wateringImg from '../../assets/watering.png';

import { style } from './styles';

const Welcome = () => {
  const navigation = useNavigation();

  function handleStart () {
    navigation.navigate('UserIdentification')
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {'\n'} 
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg} 
          style={style.image} 
          resizeMode="contain"
        />

        <Text style={style.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar. 
        </Text>

        <Button type="small" onPress={handleStart}>
          <Entypo name="chevron-right" size={28} />
        </Button>
      </View>
    </SafeAreaView>
  )
};

export { Welcome };