import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from '@store/store';
import useColorScheme from '@hooks/useColorScheme';
import { NativeBaseProvider } from 'native-base';
import Navigation from '@src/navigation';
import useCachedResources from '@hooks/useCachedResources';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
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
