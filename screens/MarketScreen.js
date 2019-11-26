import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function MarketScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text>Привет MarketScreen</Text>
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
