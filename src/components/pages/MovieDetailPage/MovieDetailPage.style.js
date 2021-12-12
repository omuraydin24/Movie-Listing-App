import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 180,
  },
  container: {
    backgroundColor: "#ebede7",
    paddingTop: 15,
  },

  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  
  characters: {
    fontSize: 23,
    color: "#0c0c0c",
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  seperator: {
    fontSize: 25,
    fontWeight: "600",

  },
  backButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
    justifyContent: 'center',
    paddingTop: 50,
    position: "absolute",
  },

})