import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  input: {
    backgroundColor: "#E5E5E5",
    padding: 2,
    marginVertical: 5,
    marginRight: 12,
    width: width * 0.8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
  },
})