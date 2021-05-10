import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Loader } from '../../components/Loader';

import { S } from './styles';

import waterDrop from '../../assets/waterdrop.png';

import { PlantProps, loadSavePlants, removePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>('');

  async function loadStorageData() {
    const plantStoraged = await loadSavePlants();

    const nextTime = formatDistance(
      new Date(plantStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    setNextWatered(
      `Não esqueça de regar a ${plantStoraged[0].name} à ${nextTime}.`,
    );

    setMyPlants(plantStoraged);
    setIsLoading(false);
  };

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      { 
        text: 'Não 🙏🏻',
        style: 'cancel'
      },
      { 
        text: 'Sim 🥲',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            
            setMyPlants((oldData) => (
              oldData.filter(item => item.id !== plant.id)
            ));
          } catch (error) {
            Alert.alert('Não foi possível remover 🥲')
          }
        }
      }
    ]);
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  if(isLoading) {
    return <Loader />;
   }

  return (
    <View style={S.container}>
      <Header />

      <View style={S.spotlight}>
        <Image source={waterDrop} style={S.spotlightImage} />
        <Text style={S.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={S.plants}>
        <Text style={S.plantsTitle}>
          Próximas regadas
      </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
          renderItem={({ item }) => (
            <PlantCardSecondary 
              data={item} 
              handleRemove={() => handleRemove(item)}
            />
          )}
        />
      </View>
    </View>
  )
};

export { MyPlants };