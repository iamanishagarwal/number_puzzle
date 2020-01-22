import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Button = ({value, bgColor}) => {
  return (
    <View style={{backgroundColor: bgColor}}>
      <Text style={style.text}>{value.toUpperCase()}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'Bangers-Regular',
    fontSize: 60,
    textAlign: 'center',
  },
});

export default Button;
