import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  children: string;
}

const Title: React.FunctionComponent<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
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
