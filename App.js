import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, TouchableHighlight } from 'react-native';
import FlexBoxComp from './flexbox';

function MyComponent(props) {
  return (
    <View style={{ backgroundColor: '#dc143c' }}>
      <Text>My Component</Text>
    </View>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  }
  const onText = () => { }
  useEffect(() => {
    if (count > 0)
      Alert.alert(`Count is ${count}`)
  }, [count])
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={onIncrement}></Button>
      <TextInput style={styles.tt} onChangeText={onText} />
      <StatusBar style="auto" />
      {/* <FlexBoxComp /> */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#00ced1"
        onPress={() => alert('Pressed!')}>
          <MyComponent />
          </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50
  },
  tt: {
    borderWidth: 2,
    borderColor: "#dc143c",
    width: '40%'
  }
});
