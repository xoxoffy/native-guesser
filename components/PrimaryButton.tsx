import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  children: string;
}

const PrimaryButton: React.FunctionComponent<Props> = ({ children }) => {
  const pressHandler = () => {
    console.log('Pressed!');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#d35d77' }}
      >
        <Text>Test</Text>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 6,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#f76b8a',
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
