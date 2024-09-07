import React from 'react';
import { View } from 'react-native';
import Login from '@/components/login'; // Adjusted for TypeScript

const Index: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}

export default Index;
