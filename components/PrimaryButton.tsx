import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  children: string;
}

const PrimaryButton: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
