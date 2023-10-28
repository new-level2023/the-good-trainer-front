/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// import {connect} from 'react-redux';
import Signin from '../../screens/Signin';
import Home from '../../screens/Home';
import Onboarding from '../../screens/Onboarding';

import Trainer from '../../screens/Trainer';


// import RNCitizenPrinterModule from '../../printers.js/RNCitizenPrinterModule';
// import RNBrotherPrinterModule from '../../printers.js/RNBrotherPrinterModule';

import LogIn from '../../screens/LogIn';
import TrainerDashboard from '../../screens/TrainerDashboard';


const Root = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="Trainer" component={Trainer} />

        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="TrainerDashboard" component={TrainerDashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const mapStateToProps = ({
//   adminuser,
//   eventlist,
//   activeevent,
//   badgeprinterdevice,
// }) => {
//   return {
//     adminuser,
//     eventlist,
//     activeevent,
//     badgeprinterdevice,
//   };
// };

// export default connect(mapStateToProps)(Root);
export default Root;
