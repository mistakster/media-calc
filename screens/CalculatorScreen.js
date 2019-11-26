import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function CalculatorScreen() {
    return(
        <ScrollView style={styles.container}>
        <Text>Привет CalculatorScreen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
