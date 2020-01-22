import React from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Button from '../components/Button';

const HomeScreen = props => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#B2FF59" barStyle="dark-content" />
      <Text style={style.header}>Select</Text>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => props.navigation.navigate('Game')}>
        <Button value="Easy" bgColor="#03A9F4" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => props.navigation.navigate('Game')}>
        <Button value="Medium" bgColor="#F44336" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => props.navigation.navigate('Game')}>
        <Button value="Difficult" bgColor="#FFEB3B" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#64DD17',
  },
  header: {
    fontFamily: 'Bangers-Regular',
    fontSize: 80,
    textAlign: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '70%',
    borderRadius: 50,
  },
});

export default HomeScreen;
