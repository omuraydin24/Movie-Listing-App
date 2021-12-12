import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, ActivityIndicator, SafeAreaView, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useFetch from "../../hooks/useFetch";
import Carousel from 'react-native-snap-carousel';
import ListCard from "../../Cards/ListCard"
import FilterCard from "../../Cards/FilterCard"
import styles from "./ListPage.style";

const URL = "http://10.0.2.2:3000/movies";

const ListPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [suggest, setSuggest] = useState([])

  const {
    loading,
    error,
    data: movieData
  } = useFetch(URL)

  const [filter, setFilter] = useState(movieData)

  useEffect(() => {
    setFilter(movieData)
  }, [movieData])

  if (loading) {
    return <View style={styles.loading}>
      <ActivityIndicator size="large" color="#2a3c5f" />
    </View>
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const handleDetail = movieData => {
    navigation.navigate('MovieDetailPage', { movieData });
  };

  const renderMovies = ({ item }) => {
    return (
      <ListCard data={item} onPress={() => {
        return (
          handleDetail(item),
          onSelectMovie(item.genre)
        )
      }} />
    )
  }

  function onSelectMovie(category) {
    const suggestList = movieData.filter(a => a.genre.includes(category.name))
    setSuggest(suggestList)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <Icon name="menu" size={30} color="black" />
        <Text style={styles.title}>Movies</Text>
        <View style={styles.filterContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            closeOnClick={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalOutside}>
                <TouchableWithoutFeedback>
                  <FilterCard movieData={movieData} sendData={setFilter} setModalVisible={setModalVisible} modalVisible={modalVisible} />
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>

          </Modal>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
            <Icon name="filter-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listContainer}>
        {/* FlatList can be used too. But lack of styling as of now  */}

        {/* <View style={styles.gap}></View> */}
        {/* <FlatList
          horizontal
          renderItem={renderMovies}
          data={filter}
          keyExtractor={item => item.id}
        /> */}

        <Carousel
          data={filter}
          renderItem={renderMovies}
          sliderWidth={400}
          itemWidth={width * 0.8}
        />
      </View>
    </SafeAreaView >
  );
}
export default ListPage;
