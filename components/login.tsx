import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Login: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'custom-font': require('../assets/fonts/RobotoCondensed-VariableFont_wght.ttf'), // Replace with your custom font
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ImageBackground
      source={require('../assets/images/usebg.png')}  // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Mitra AI</Text>

        {/* Use Link for navigation */}
        <Link href="/landing/mainPage" style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // Additional styling if needed
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'custom-font',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 33,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'custom-font',
  },
});

export default Login;
