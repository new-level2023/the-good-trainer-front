import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function ButtonSecundary({ onPress, text }) {
  return (
    <View style={styles.text}>
      <Pressable
        onPress={onPress}
        color={'#0000'}
        style={styles.buttonColor}
        colorScheme="primary"
        variant="subtle"
      >
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
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: 18,
  },
  buttonColor: {
    marginTop: 19,
    backgroundColor: '#FFF',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 30,
    width: 250,
  },
});
