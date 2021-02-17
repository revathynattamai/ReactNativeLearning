import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default function FlexBoxComp() {
    return (<View style={styles.asdf}>
        <View style={styles.abc}><Text>a</Text></View>
        <View style={styles.abc}><Text>b</Text></View>
        <View style={styles.abc}><Text>c</Text></View>
        <View style={styles.abc}><Text>a</Text></View>
        <View style={styles.abc}><Text>b</Text></View>
        <View style={styles.abc}><Text>c</Text></View>
        <View style={styles.abc}><Text>a</Text></View>
        <View style={styles.abc}><Text>bdfasdfasdfasdfdfadf</Text></View>
        <View style={styles.abc}><Text>c</Text></View>
        <View style={styles.abc}><Text>a</Text></View>
        <View style={styles.abc}><Text>b</Text></View>
        <View style={styles.abc}><Text>c</Text></View>
        <View style={styles.abc}><Text>a</Text></View>
        <View style={styles.abc}><Text>b</Text></View>
        <View style={styles.abc}><Text>cdfasdfadf</Text></View>
    </View>)
}

const styles = StyleSheet.create({
    asdf: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      alignContent: 'center',
      flexGrow: 1,
      backgroundColor: "#faebd7",
      borderWidth: 4,
      borderColor: "#000000"
    },
    abc: {
      borderWidth: 3,
      borderColor: "#b8860b",
      padding: 10,
      margin: 2,
    }
})