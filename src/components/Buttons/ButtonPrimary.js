import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function ButtonPrimary({ onPress, text }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} color={'#fff'} style={styles.buttonColor} variant="subtle">
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 43,
    width: '100%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: 18,
  },
  buttonColor: {
    marginTop: 19,
    backgroundColor: '#2B2521',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 30,
  },
});
