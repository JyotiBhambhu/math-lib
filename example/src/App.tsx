import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import {
  addition,
  division,
  multiply,
  subtraction,
} from 'react-native-math-lib';

export default function App() {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter number input 1"
        value={input1}
        onChangeText={(value1) => {
          setInput1(value1);
        }}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Enter number input 2"
        value={input2}
        onChangeText={(value2) => {
          setInput2(value2);
        }}
        keyboardType="numeric"
      ></TextInput>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="+"
            onPress={() => {
              setResult(addition(input1, input2));
              console.log('addition pressed', result);
            }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={() => {
              setResult(subtraction(input1, input2));
            }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="x"
            onPress={() => {
              setResult(multiply(input1, input2));
            }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="/"
            onPress={() => {
              setResult(division(input1, input2));
            }}
          ></Button>
        </View>
      </View>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  button: {
    marginHorizontal: 4,
  },
});
