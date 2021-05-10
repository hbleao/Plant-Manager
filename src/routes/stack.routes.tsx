import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes';

import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';
import { PlantSave } from '../screens/PlantSave';
import { MyPlants } from '../screens/MyPlants';

import { theme } from '../styles/theme';

const stacksRoutes = createStackNavigator();

const AppRoutes = () => (
  <stacksRoutes.Navigator 
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: theme.colors.white}
    }}
  >
    <stacksRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <stacksRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stacksRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
    <stacksRoutes.Screen
      name="PlantSelect"
      component={AuthRoutes}
    />
    <stacksRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />
    <stacksRoutes.Screen
      name="MyPlants"
      component={AuthRoutes}
    />
  </stacksRoutes.Navigator>
);

export default AppRoutes;