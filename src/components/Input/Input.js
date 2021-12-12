import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.style';

const Input = ({ onSubmit, placeholder, value }) => {
  return (
    <View>
      <TextInput style={styles.input}
        placeholder={`${placeholder}...`}
        onChangeText={onSubmit}
        value={value}
      />
    </View>
  )
}

export default Input;