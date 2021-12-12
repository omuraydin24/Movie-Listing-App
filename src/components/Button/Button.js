import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './Button.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Button({ onClick }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}
        onPress={onClick}
      >
        <Icon name="arrow-right-thick" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}

