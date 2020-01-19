import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('App'), 3000);
  }, []);

  return (
    <View style={style.imageContainer}>
      <Image style={style.image} source={require('../../assets/splash.png')} />
      <Image style={style.image} source={require('../../assets/logo.png')} />
    </View>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
