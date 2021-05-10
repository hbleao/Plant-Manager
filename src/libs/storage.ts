import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import * as Notifications from 'expo-notifications';

export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  },
  hour?: string;
  dateTimeNotification: Date;
}

export interface IStoragePlantsPros {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  }
}

async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date;
    
    const { times, repeat_every } = plant.frequency;

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(nextTime.getDate() + interval);
    } 
    else {
      nextTime.setDate(nextTime.getDate() + 1)
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,

        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    const data = await AsyncStorage.getItem('@plantManager:plants');
    const oldPlants = data ? (JSON.parse(data)) as IStoragePlantsPros: {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId
      }
    };

    await AsyncStorage.setItem('@plantManager:plants', JSON.stringify({
      ...newPlant,
      ...oldPlants
    }));
  } catch (error) {
    throw new Error(error);
  }
};

async function loadSavePlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantManager:plants');
    const plants = data ? (JSON.parse(data)) as IStoragePlantsPros: {};

    const plantsSorted = Object.keys(plants).map(plant => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    }).sort((a, b) => Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    );

    return plantsSorted;
  } catch (error) {
    throw new Error(error);
  }
};

async function removePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantManager:plants');
  const plants = data ? (JSON.parse(data) as IStoragePlantsPros ) : {};

  delete plants[id];

  await AsyncStorage.setItem(
    '@plantManager:plants', 
    JSON.stringify(plants)
  )
}

async function addNotification () {
    await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got mail! 📬",
          body: 'Here is the notification body',
          data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
}

export { savePlant, loadSavePlants, removePlant, addNotification };