import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { S } from './styles';

import { PlantProps } from './interface';

const PlantCardPrimary = ({data, ...rest}: PlantProps) => {

  return (
    <RectButton 
      style={S.container}
      {...rest}
    >
      <SvgFromUri uri={data.photo} height={70} width={70} />
      <Text style={S.text}>
        {data.name}
      </Text>
    </RectButton>
  )
};

export { PlantCardPrimary };