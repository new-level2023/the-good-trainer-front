import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonVariant from '../../components/Buttons/ButtonVariant';
//import ButtonGradient from '../../components/Buttons/ButtonGradient';

export function Onboarding({ navigation }) {
  const navigateTrainer = (e) => {
    navigation.navigate('Trainer');
  };
  const navigateChamp = (e) => {
    navigation.navigate('Trainer');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/logo.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Are you a trainer or champ ?</Text>
      <ButtonPrimary text={'Trainer'} onPress={navigateTrainer} />
      <ButtonVariant text={'Champ'} onPress={navigateChamp} />
      {/* <ButtonGradient text={'Continue'} /> */}
    </View>
  );
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
});
