import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';

import { S } from './styles';

const UserIdentification = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFiled, setIsFiled] = useState(false);
  const [name, setName] = useState<string>();

  async function handleSubmit () {
    if(!name) {
      Alert.alert("Ops!", 'Me diz como chamar você 🥲');
      return;
    };

    await AsyncStorage.setItem('@plantManager:user', name);

    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado!',
      buttonTitle: 'Bora lá',
      icon: 'smile',
      nextScreen: 'PlantSelect'
    });
  };

  function handleInputBlur () {
    setIsFocused(false);
    setIsFiled(!!name);
  };

  function handleInputFocus () {
    setIsFocused(true);
  };

  function handleInputChange (value: string) {
    setIsFocused(!!value);
    setName(value);
  };

  return (
    <SafeAreaView style={S.container}>
      <KeyboardAvoidingView 
        style={S.container}
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={S.content}>
            <View style={S.form}>
              <View style={S.header}>
                <Text style={S.emoji}>
                  { isFiled ? '🤩': '😄' }
                </Text>
                <Text style={S.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
                <TextInput 
                  style={[
                    S.textInput,
                    (isFocused || isFiled) && S.borderGreen
                  ]}
                  placeholder="Digite seu nome"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />
                <View style={S.footer}>
                  <Button type="large" onPress={handleSubmit}>
                    Confirmar
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

export { UserIdentification };
