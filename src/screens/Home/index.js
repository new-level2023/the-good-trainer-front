import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import React from 'react';
import ButtonSecundary from '../../components/Buttons/ButtonSecundary';

export default function Home({ navigation }) {
  const onPress = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/home.png')}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.image}
      >
        <View style={styles.containersub}>
          <Image source={require('../../assets/image/logo.png')} style={styles.icon} />
          <Text style={styles.text}>Meet Our Expert Instructors</Text>
          <Text style={styles.textLight}>
            Learn with fitness experts, at your own pace, and 100% updated content.
          </Text>
          <ButtonSecundary onPress={onPress} text={'Get started'} />
          <Text style={styles.textLight}>
            Already have account?{' '}
            <Pressable>
              <Text style={styles.colorPrimary}>Log In</Text>
            </Pressable>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // paddingBottom: 35,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  containersub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  icon: {
    width: 50,
    height: 60,
    //marginBottom: 100,
  },
  text: {
    marginTop: 14,
    width: 250,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: 24,
  },
  textLight: {
    marginTop: 16,
    width: 300,
    color: '#FFF',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Satoshi-Light',
    fontSize: 16,
  },
  colorPrimary: {
    color: '#E34A01',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
