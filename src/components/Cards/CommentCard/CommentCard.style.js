import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
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
  commentContainer: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 5,
  },
  commentTextContainer: {
    borderColor: "grey",
    borderWidth: 0.3,
    backgroundColor: "#FAFAFA",
    marginBottom: 5,
    borderRadius: 10,
    marginTop: 5,
    marginRight: 10,
    elevation: 5,
    shadowColor: '#12153D',
  },
  commentText: {
    fontFamily: 'Proxima Nova Semibold',
    color: "black",
    margin: 5,
    textAlign: "justify",
    fontSize: 15,
  },
  commentBox: {
    height: height * 0.6,
    width: width,
    position: "absolute",
    bottom: 0,
    borderWidth: 2,
    borderColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    backgroundColor: "#FAFAFA",
  },
  commentBoxTitle: {
    textAlign: "center",
    fontFamily: "Proxima-Nova-Bold",
    color: "#12153D",
    fontSize: 20,
    marginBottom: 7,
  },
})
