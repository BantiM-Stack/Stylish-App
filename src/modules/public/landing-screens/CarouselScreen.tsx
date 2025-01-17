import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { blue, red } from 'react-native-reanimated/lib/typescript/Colors';
import Swiper from 'react-native-swiper';

const CarouselScreen: React.FC = () => {
  return (
    <Swiper nextButton={<Text style={{flex:1,}}>Next</Text>} >
      <View style={styles.screen}>
        <Image source={require('../../../assets/a2.png')} style={styles.image} />
        <Text style={styles.title}>Choose Products</Text>
        <Text style={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        <Button title="Next" onPress={() => {}} />
      </View>
      <View style={styles.screen}>
        <Image source={require('../../../assets/a3.png')} style={styles.image} />
        <Text style={styles.title}>Make Payment</Text>
        <Text style={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        <Button title="Next" onPress={() => {}} />
      </View>
      <View style={styles.screen}>
        <Text style={styles.title}>Get Your Order</Text>
        <Image source={require('../../../assets/a4.png')} style={styles.image} />
        <Text style={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        <Button title="Get Started" onPress={() => {}} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'red',
    marginBottom: 10,
    borderRadius: 8,
  }
});

export default CarouselScreen;
