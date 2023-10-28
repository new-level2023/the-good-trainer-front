import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonVariant from '../../components/Buttons/ButtonVariant';
import ButtonGradient from '../../components/Buttons/ButtonGradient';

export default function Onboarding({navigation}) {
  const onPress = () => {
    navigation.navigate('TrainerDashboard');
  };

export default function Onboarding({navigation}) {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/logo.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Are you a trainer or champ ?</Text>

      <ButtonPrimary text={'Trainer'} />
      <ButtonVariant text={'Champ'} onPress={onPress} />
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
