import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "black",
    width: width * 0.1,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 5,

  },
  buttonText: {
    color: "white",
    fontFamily: "Proxima Nova Semibold",

  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  }
})
