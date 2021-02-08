import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import styles from './assets/components/CarItem/style';
import CarsList from './assets/components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
    </View>
  );
}

