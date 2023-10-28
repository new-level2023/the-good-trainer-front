/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rutines from '../../Rutines';
import Dashboard from '../Dashboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Champs from '../Champs';
import { NativeBaseProvider } from 'native-base';
import TopBar from '../../components/TopBar/TopBar';

export default function TrainerDashboard() {
  const Tab = createBottomTabNavigator();
  return (
    <NativeBaseProvider>
      <View style={{ height: '100%', backgroundColor: '#ffff' }}>
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={({ route }) => ({
            // headerShown: false,
            header: () => <TopBar />,
            tabBarStyle: {
              height: 70,
              paddingHorizontal: 5,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '#2B2521',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = 'home-filled';
              } else if (route.name === 'Rutines') {
                iconName = 'book';
              } else if (route.name === 'Champs') {
                iconName = 'account-box';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffff',
            tabBarItemStyle: {
              borderRadius: 8,
              height: 50,
              paddingVertical: 6,
            },
            tabBarInactiveTintColor: '#979797',
            tabBarActiveBackgroundColor: '#979797',
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              textAlign: 'center',
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Rutines" component={Rutines} />
          <Tab.Screen name="Champs" component={Champs} />
        </Tab.Navigator>
      </View>
    </NativeBaseProvider>
  );
}
