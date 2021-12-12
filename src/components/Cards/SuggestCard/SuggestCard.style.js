import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    width: 120,
    alignItems: "center",
    marginBottom: 15,
  },
  movieContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: "row",
    backgroundColor: "#ecede8",
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 150,
    elevation: 5,
    shadowColor: '#12153D',
    flexWrap: "wrap"
  },
  name: {
    color: "#2a3c5f",
    fontSize: 15,
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
    fontSize: 12,
    fontFamily: "Proxima Nova Semibold",
    color: "#2a3c5f",
    marginRight: 5,
  },
  genreContainer: {
    borderWidth: 0.5,
    borderColor: "#434670",
    borderRadius: 30,
    width: 50,
    height: 15,
    justifyContent: "center",
    margin: 2,

  },
  genre: {
    textAlign: "center",
    fontSize: 9,
    color: "#2a3c5f",
    fontFamily: "Proxima Nova Semibold",
  },
  imageContainer: {
    position: "relative"
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 15,
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


})