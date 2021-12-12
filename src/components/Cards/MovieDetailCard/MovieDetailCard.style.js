import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  mainContainer: {
    position: "relative",
  },
  backButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
    position: "absolute",
    top: 70,
    left: 5,
    zIndex: 10,

  },
  container: {
    backgroundColor: "#FAFAFA",
    marginTop: 45,
    flex: 1,

  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 300,
    resizeMode: "cover",
    position: 'relative',
    borderBottomLeftRadius: 60,
  },

  sideContainer: {
    width: 218,
    height: 109,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    position: "absolute",
    top: 300 - 109 / 2,
    right: 0,
    flexDirection: "row",
  },
  elevation: {
    elevation: 20,
    shadowColor: '#12153D',
  },
  ratingContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  commentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  rate1: {
    fontSize: 15,
    fontFamily: "Proxima Nova Semibold",
    color: "#12153D"

  },
  rate2: {
    fontSize: 12,
    fontFamily: "Proxima Nova Semibold",
    color: "#434670",
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 35,
    color: "#12153D",
    textAlign: "center",
    marginTop: 75,
  },

  director: {
    fontSize: 15,
    color: "#9A9BB2"

  },
  castTitle: {
    fontSize: 25,
    color: "#0c0c0c",
    fontFamily: "Proxima Nova Semibold",
    marginTop: 10,
    marginBottom: 10,
  },
  castContainer: {
    borderRadius: 10,
    width: 80,
    height: 125,
    margin: 15,
  },
  castName: {
    textAlign: 'center',
    color: "#12153D",
    fontFamily: "Proxima Nova Semibold",
    justifyContent: 'center',
    alignItems: 'center',
  },
  castImage: {
    width: 75,
    height: 80,
    borderRadius: 100,
    resizeMode: "cover",
    backgroundColor: "red"
  },
  genreListContainer: {
    flexDirection: "row",
    margin: 10,
  },
  genreContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 86,
    height: 30,
    borderWidth: 0.7,
    borderColor: "grey",
    borderRadius: 100,
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 13,
    fontFamily: "Proxima Nova Semibold",
    color: "#434670"
  },
  briefText: {
    textAlign: "justify",
    fontFamily: "Proxima-Nova-Reg",
    marginHorizontal: 15,
    lineHeight: 17,
  },
  commentModalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "grey",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  showCommentText: {
    color: "black",
    fontFamily: "Proxima Nova Semibold",
    color: "#12153D",
    fontSize: 16,
  },
  modalContainer: {
    alignItems: "center",
  },
  suggestContainer: {
    alignItems: 'center',
  },
  suggestTitle: {
    fontSize: 25,
    color: "#0c0c0c",
    fontFamily: "Proxima Nova Semibold",
    marginBottom: 13,
  }

})