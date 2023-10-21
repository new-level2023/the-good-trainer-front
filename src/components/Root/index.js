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
// import Events from '../../screens/Events';

// import EventPrinter from '../../screens/EventPrinter';
// import EventBadge from '../../screens/EventBadge';
// import EventUsers from '../../screens/EventUsers';
// import EventKiosk from '../../screens/EventKiosk';
// import EventPreview from '../../screens/EventPreview';

// import KioskConfirmed from '../../screens/KioskConfirmed';
// import KioskPreview from '../../screens/KioskPreview';
// import KioskSearch from '../../screens/KioskSearch';
// import KioskUnlock from '../../screens/KioskUnlock';

// import {connect} from 'react-redux';
import Signin from '../../screens/Signin';
import Home from '../../screens/Home';
import Onboarding from '../../screens/Onboarding';
import Trainer from '../../screens/Trainer';


// import RNCitizenPrinterModule from '../../printers.js/RNCitizenPrinterModule';
// import RNBrotherPrinterModule from '../../printers.js/RNBrotherPrinterModule';

const Root = () => {
  const Stack = createStackNavigator();
  //   useEffect(() => {
  //     const initPrinters = async () => {
  //       await RNBrotherPrinterModule.init();
  //       await RNCitizenPrinterModule.init();
  //     };
  //     initPrinters();
  //   }, []);

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
