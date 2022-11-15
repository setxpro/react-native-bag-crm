import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function New() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>New</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
    }
})