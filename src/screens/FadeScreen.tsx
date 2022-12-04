import React from 'react';
import { View } from 'react-native';

export const FadeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ backgroundColor: '#084f61', width: 150, height: 150 }} />
    </View>
  );
};
