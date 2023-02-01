import { Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

interface Props {
  pickedNumberHandler: (pickedNumber: string) => void;
}

const StartGameScreen: React.FunctionComponent<Props> = ({
  pickedNumberHandler,
}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => setEnteredNumber(''),
          },
        ]
      );
      return;
    }
    pickedNumberHandler(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad" // number-pad works on both platforms
        maxLength={2}
        onChangeText={(enteredText: string) => {
          setEnteredNumber(enteredText);
        }}
        value={enteredNumber}
        onSubmitEditing={confirmInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#478d8d',
    borderRadius: 8,
    // Android
    elevation: 4,
    // iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#eaf6f6',
    borderBottomWidth: 2,
    color: '#f76b8a',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
