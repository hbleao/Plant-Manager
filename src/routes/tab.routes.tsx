import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { PlantSelect } from '../screens/PlantSelect';
import { MyPlants } from '../screens/MyPlants';

import { theme } from '../styles/theme';

const AppTab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <AppTab.Navigator 
      tabBarOptions={{
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.heading,
        labelPosition: 'beside-icon',
        style: { 
          paddingVertical: 20,
          height: 88
        }
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect} 
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
};

export default AuthRoutes;