import React from 'react';
import Navigation from './navigations/Navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
