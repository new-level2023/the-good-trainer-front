import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Badge, Box} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TopBar() {
  return (
    <View style={styles.containerTopBar}>
      <Image
        source={require('../../assets/image/logo.png')}
        style={styles.icon}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Box alignItems="center" marginRight={5}>
          <Badge // bg="red.400"
            colorScheme="danger"
            rounded="full"
            mb={-4}
            mr={-1}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}>
            2
          </Badge>
          <Icon name="notifications" size={40} color={'#9CA3AF'} />
        </Box>
        <Avatar
          bg="green.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTopBar: {
    height: 70,
    paddingVertical: 14,
    backgroundColor: '#ffff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 50,
  },
});
