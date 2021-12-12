import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  filterContainer: {
    height: 390,
    width: 115,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    position: "absolute",
    right: 5,
    top: 25,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: "grey",
    paddingTop: 5,
  },

  filterButton: {
    width: 85,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 5,

  },
  filterTag: {
    fontFamily: 'Proxima Nova Semibold',
    color: "black"
  },
  loading: {
    justifyContent: "center",
    alignItems: "center"
  }

})