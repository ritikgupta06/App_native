import React from 'react';
import { Stack } from 'expo-router';

const RootLayout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Stack will automatically detect screens based on the folder structure */}
    </Stack>
  );
};

export default RootLayout;
