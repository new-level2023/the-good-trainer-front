import { Input, NativeBaseProvider, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export const CustomInput = (props) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Input
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
          style={[styles.input, props.inputStyle]}
          keyboardType={props.type}
        />
      </View>
      {props.InputRightElement}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    height: 56,
    marginBottom: 10,
    marginHorizontal: 43,
  },
  inputStyle: {
    flex: 1,
    borderWidth: 2,
    fontSize: 16,
    borderColor: '#000',
    width: '100%',
  },
});

export default CustomInput;
