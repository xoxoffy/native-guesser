import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: string;
}
const { accent500 } = Colors;

const NumberContainer: FunctionComponent<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
