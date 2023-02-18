import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from '@hooks/useCachedResources';
import useColorScheme from '@hooks/useColorScheme';
import Navigation from '@src/navigation';
import { persistor, store } from '@store/store';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { AnimatePresence } from 'moti';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Hide warnings

LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AnimatePresence exitBeforeEnter>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NativeBaseProvider>
        </GestureHandlerRootView>
      </AnimatePresence>
    </SafeAreaProvider>
  );
};

const ReduxWrapper = () => {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default ReduxWrapper;
