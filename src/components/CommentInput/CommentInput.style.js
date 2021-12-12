import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   paddingBottom: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    

  },
})