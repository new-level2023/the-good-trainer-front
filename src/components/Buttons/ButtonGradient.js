import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ButtonGradient({onPress, text, icon}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#FE7F00', '#DF4800', '#BD0101']}
      style={styles.buttonColor}>
      <Pressable style={styles.buttonPress} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        <Icon name="arrow-forward" color={'#FFF'} size={25} />
        {icon && <Icon name="arrow-forward" color={'#FFF'} size={25} />}
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  buttonPress: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonColor: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 30,
    width: 250,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
});
