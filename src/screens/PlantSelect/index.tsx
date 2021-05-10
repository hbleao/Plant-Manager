import React, { useState, useEffect } from 'react';
import { 
  View,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Loader } from '../../components/Loader';

import { PlantsService } from '../../services/PlantsService';

import { S } from './styles';
import { theme } from '../../styles/theme';

import { mountParamsRequest } from '../../helpers/mountParamsRequest';

import { EnvironmentProps, PlantProps } from './interface';

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function getEnvironment() {
    const data = await PlantsService.getPlantsEnvironment();
    setEnvironments([
      {
        key: 'all',
        title: 'Todos'
      },
      ...data
    ]);
  };

  async function getPlants() {
    const params = mountParamsRequest({  page: page, limit: 8 });
    const data = await PlantsService.getPlants(params);

    if(!data) return setIsLoading(true);
    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setIsLoading(false);
    setLoadingMore(false);
  };

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if(environment === 'all') {
      setFilteredPlants(plants);
      return;
    };

    const filteredPlants = plants.filter(plant => plant.environments
      .includes(environment));

      setFilteredPlants(filteredPlants);
  };

  function handleFetchMore(distance: number) {
    if (distance < 1) return;
    
    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    getPlants();
  };

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate("PlantSave", { plant });
  };

  useEffect(() => {
    getEnvironment();
    getPlants();
  }, []);

  if(isLoading) {
   return <Loader />;
  }

  return (
    <View style={S.container}>
      <Header />

      <Text style={S.title}>
        Em qual ambiente
      </Text>
      <Text style={S.subtitle}>
        Voce quer colocar sua planta ?
      </Text>

      <View>
        <FlatList
          data={environments}
          keyExtractor={item =>  String(item.key)}
          contentContainerStyle={S.environmentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <EnvironmentButton 
              key={item.key}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            >
              {item.title}
            </EnvironmentButton>
          )}
        />
      </View>

      <View style={S.plants}>
        <FlatList
            data={filteredPlants}
            keyExtractor={item =>  String(item.id)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
            renderItem={({ item }) => (
              <PlantCardPrimary 
                data={item} 
                onPress={() => handlePlantSelect(item)}
              />
            )}
            ListFooterComponent={
              loadingMore 
              ? ( <ActivityIndicator color={theme.colors.green} /> )
              : (<></>)
            }
          />
      </View>
    </View>
  )
}

export { PlantSelect };