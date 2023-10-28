import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

export default function ButtonVariant({ onPress, text }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        color={'#0000'}
        style={styles.buttonColor}
        colorScheme="primary"
        variant="subtle"
      >
        <Text style={styles.text}>{text}</Text>
        <Image source={require('../../assets/image/Bitmap.png')} style={styles.icon} />
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
    backgroundColor: '#ffff',
    borderColor: '#2B2521',
    borderWidth: 1,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
