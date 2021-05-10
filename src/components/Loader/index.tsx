import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { S } from './styles';

import loadAnimation from '../../assets/load.json';

const Loader = () => {

  return (
    <View style={S.container}>
      <LottieView
        style={S.animation}
        source={loadAnimation}
        autoPlay
        loop
      />
    </View>
  )
};



export { Loader };