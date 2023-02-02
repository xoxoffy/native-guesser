import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: string;
}

const { primary600 } = Colors;

const Title: React.FunctionComponent<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primary600,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: primary600,
    padding: 10,
  },
});
