import React from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import { 
  SafeAreaView,
  Text,
  View
} from 'react-native';

import Button from '../../components/Button';

import { S } from './styles';

import { Params, emojis } from './interface';

const Confirmation = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const { 
    title,
    subtitle,
    icon,
    buttonTitle,
    nextScreen
   } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  };

  return (
    <SafeAreaView style={S.container}>
      <View style={S.content}>

        <Text style={S.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={S.title}>
          {title}
        </Text>

        <Text style={S.subtitle}>
          {subtitle}
        </Text>

        <View style={S.footer}>
          <Button type="large" onPress={handleMoveOn}>
            {buttonTitle}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
};

export { Confirmation };