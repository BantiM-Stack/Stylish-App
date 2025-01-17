import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Carousel');
    }, 3000); // Display for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/a1.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 101,
    width: 280,
    marginVertical: 20,
  },
});

export default SplashScreen;
