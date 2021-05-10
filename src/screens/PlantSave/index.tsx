import React, { useState } from 'react';
import { 
  View,
  Text,
  Image,
  Platform,
  Alert,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute, useNavigation } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import Button from '../../components/Button';

import { S } from './styles';

import waterDrop from '../../assets/waterdrop.png';

import { addNotification, savePlant } from '../../libs/storage';

import { PlantProps } from './interface';

const PlantSave = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as PlantProps;
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDatePicker(!showDatePicker);
    };

    if(dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro ⏰");
    };

    if(dateTime) {
      setSelectedDateTime(dateTime);
    } 
  };

  function handleOpenDatePickerForAndroid () {
    setShowDatePicker(!showDatePicker);
  };

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo!',
        subtitle: 'Fique tranquilo que sempre vamos lembrar de cuidar da sua plantinha com muito amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar sua plantinha 🥲');
    }
  };

  return (
    <View style={S.container}>
      <View style={S.plantInfo}>
        <SvgFromUri 
          uri={plant.photo}
          height={200}
          width={200}
        />

        <Text style={S.plantName}>
          {plant.name}
        </Text>

        <Text style={S.plantAbout}>
          {plant.about}
        </Text>

      </View>

      <View style={S.controller}>
        <View style={S.tipContainer}>
          <Image 
            source={waterDrop}
            style={S.tipImage}
          />
          <Text style={S.tipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={S.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

       {showDatePicker && <DateTimePicker 
          value={selectedDateTime}
          mode="time"
          display="spinner"
          onChange={handleChangeTime}
        />}

        {Platform.OS === 'android' && (
          <TouchableOpacity 
            onPress={handleOpenDatePickerForAndroid}
            style={S.dateTimePickerButtonAndroid}
          >
            <Text style={S.dateTimePickerTextAndroid}>
              {`Mudar Horário: ${format(selectedDateTime, 'HH:mm')}`}
            </Text>
          </TouchableOpacity>
        )

        }

        <View style={S.buttonContainer}>
          <Button type="large" onPress={handleSave}>
            Cadastrar Planta
          </Button>
        </View>
      </View>
    </View>
  )
}

export { PlantSave };