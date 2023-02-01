import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './../components/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a5495d',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#a5495d',
    padding: 10,
  },
});
