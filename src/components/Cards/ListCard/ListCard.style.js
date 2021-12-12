import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  movieContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: "row",
    backgroundColor: "#ecede8",
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: width * 0.05,
    // left: width * 0.04,
    width: width * 0.8,
    height: height * 0.7,
  },
  name: {
    color: "#2a3c5f",
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Proxima Nova Semibold",
    marginBottom: 5,
  },
  infoContainer: {
    alignItems: "center",
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 2,
    alignItems: "center",

  },

  rate: {
    textAlign: "center",
    fontSize: 15,
    color: "#2a3c5f",
    marginRight: 5,
    fontFamily: "Proxima Nova Semibold",
  },

  genre: {
    textAlign: "center",
    fontSize: 14,
    color: "#2a3c5f",
    fontFamily: "Proxima Nova Semibold",

  },
  image: {
    width: width * 0.8,
    height: height * 0.7,
    borderRadius: 30,
  },
  // gap: {
  //   width: width * 0.02,
  //   height: height * 0.7,
  //   opacity: 0,
  // },
  // main: {
  //   flexDirection: "row",
  // }

  imageContainer: {
    position: "relative"
  },
  brief: {
    color: "white",
    bottom: 0,
    opacity: 1,
    fontFamily: "Proxima Nova Semibold",
    lineHeight: 17,
    textAlign: "center",
    marginHorizontal: 5,
    marginBottom: 2,
  },
  briefContainer: {
    position: "absolute",
    width: width * 0.8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 60,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    flex: 1,
  },
  genreContainer: {
    borderWidth: 1,
    borderColor: "#434670",
    borderRadius: 30,
    width: 80,
    height: 20,
    justifyContent: "center",
    margin: 3,

  }

})