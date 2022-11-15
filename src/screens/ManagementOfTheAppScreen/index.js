import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function ManagementOfTheAppScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>ManagementOfTheAppScreen</Text>
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