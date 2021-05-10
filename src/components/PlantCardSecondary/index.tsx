import React from 'react';
import { Text, View, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import { S } from './styles';

import { PlantCardSecondaryProps } from './interface';

const PlantCardSecondary = ({ 
  data, 
  handleRemove, 
  ...rest 
}: PlantCardSecondaryProps) => {
  return (
    <Swipeable 
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={S.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" style={S.buttonRemoveIcon} size={22} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    > 
      <RectButton 
        style={S.container}
        {...rest}
      >
        <SvgFromUri uri={data.photo} height={50} width={50} />

        <Text style={S.title}>
          {data.name}
        </Text>

        <View style={S.details}>
          <Text style={S.timeLabel}>
            Regar às
          </Text>
          <Text style={S.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
};

export { PlantCardSecondary };