import React from 'react';
import { Input, NativeBaseProvider, extendTheme } from 'native-base';

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        borderColor: '#000',
        height: '70px',
        borderRadius: '10px',
        marginBottom: '200px',
        width: '90%',
        fontSize: 24
      },
    },
  },
});

export default function CustomInput(props) {
  return (  
    <NativeBaseProvider theme={theme}>
      <Input
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        style={props.style}
        type={props.type}
        InputLeftElement={props.InputLeftElement}
        InputRightElement={props.InputRightElement}
      />
    </NativeBaseProvider>
  );
};