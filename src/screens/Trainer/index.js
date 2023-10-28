import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonVariant from '../../components/Buttons/ButtonVariant';
import CustomInput from '../../components/NativeBase/CustomInput/CustomInput'
import { Image, TextInput   } from 'react-native'
import { NativeBaseProvider, Item,Input, Label } from 'native-base'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary'

const Trainer = () => {
  return (
  
           <View style={styles.container}>
      <Image
        source={require('../../assets/image/logo.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputView}>
        <CustomInput
          placeholder="Email"
          type="default"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputView}>
        <CustomInput
          placeholder="Password"
          type="default"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <ButtonPrimary text="Sign Up" />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#263238',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  icon: {
    width: 100,
    height: 127,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
    height: 56,
  },

})

export default Trainer