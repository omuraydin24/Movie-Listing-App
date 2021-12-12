import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 45,
    backgroundColor: "#fafafa",
    flex: 1,
  },
  title: {
    marginVertical: 5,
    fontSize: 30,
    color: "#12153D",
    textAlign: "center",
    fontFamily: "Proxima Nova Semibold",
  },
  listContainer: {
    marginBottom: 90,
    flexDirection: "row",
  },
  loading: {
    flex: 1,
    justifyContent: 'center'
  },
  filterContainer: {
  },
    headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginBottom: 15,
  },
  modalOutside: {
    // backgroundColor: "rgba(0,0,0,0.3)",
    top: 0,
    flex: 1,
  }
})