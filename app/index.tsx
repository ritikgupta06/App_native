import React from 'react';
import { View } from 'react-native';
import Login from '@/components/login'; // Use capitalized component name

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}
