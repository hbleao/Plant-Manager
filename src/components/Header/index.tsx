import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { S } from './styles';

import userImage from '../../assets/henrique.jpeg';

const Header = () => {
  const [userName, setUserName] = useState<string>();

  async function getNameAsyncStorage() {
    const userName = await AsyncStorage.getItem('@plantManager:user');
    setUserName(userName || '');
  };

  useEffect(() => {
    getNameAsyncStorage();
  }, []);

  return (
    <View style={S.container}>
      <View>
        <Text style={S.greeting}>Olá,</Text>
        <Text style={S.userName}>{userName}</Text>
      </View>

      <Image style={S.image} source={userImage}/>
    </View>
  )
}

export { Header };