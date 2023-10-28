/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Heading,
  Stack,
  AspectRatio,
  Image,
} from 'native-base';

export default function Card({item}) {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _light={{
            backgroundColor: 'gray.50',
          }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 7}>
              <Image
                source={{
                  uri: item.item.rutineImage,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Text>The Silicon Valley of India.</Text>
              <Heading size="md" ml="-1" style={{fontFamily: 'Satoshi-Bold'}}>
                {item.item.rutineName}
              </Heading>
            </Stack>
            <Text fontWeight="400" style={{fontFamily: 'Satoshi-Medium'}}>
              {item.item.rutineDescription}
            </Text>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
