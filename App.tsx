/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';

// import SplashScreen from 'react-native-splash-screen'; // For Splash Screen
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {RaHColors} from './src/utils/RahColors';
// import {Toast} from 'react-native-toast-message/lib/src/Toast';

// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from './src/store/store';
import Root from './src/components/Root';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import {toastConfig} from './src/components/Toast';

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: RaHColors.white,
//   },
// };

function App(): JSX.Element {
  // const queryClient = new QueryClient();

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <SafeAreaProvider style={{backgroundColor: '#000'}}>
      {/* <QueryClientProvider client={queryClient}> */}

      {/* <Provider>
          <PersistGate loading={null} persistor={persistor}> */}
      <NativeBaseProvider>
        <Root />
      </NativeBaseProvider>
      {/* </PersistGate>
        </Provider> */}

      {/* </QueryClientProvider> */}
      {/* <Toast config={toastConfig} /> */}
    </SafeAreaProvider>
  );
}

export default App;
