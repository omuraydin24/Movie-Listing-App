import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StatusBar, TouchableOpacity } from 'react-native';

import useFetch from '../../hooks/useFetch';
const URL = "http://10.0.2.2:3000/genres";
import styles from "./FilterCard.style";

const FilterCard = ({ movieData, sendData, setModalVisible, modalVisible }) => {
  const {
    loading,
    error,
    data: categoryData
  } = useFetch(URL)

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

  function onSelectGenre(category) {
    const movieList = movieData.filter(a => a.genre.includes(category.name))
    sendData(movieList)
  }



  const renderFilters = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        return (
          onSelectGenre(item),
          setModalVisible(!modalVisible)
        )
      }} >
        <View style={styles.filterButton}>
          <Text style={styles.filterTag}>{item.name}</Text>
        </View>
      </TouchableOpacity >
    )
  }
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => {
        return (
          sendData(movieData),
          setModalVisible(!modalVisible)
        )
      }} >
        <View style={styles.filterButton}>
          <Text style={styles.filterTag}>All Movies</Text>
        </View>
      </TouchableOpacity >
      <FlatList
        showsHorizontalScrollIndicator={false}
        renderItem={renderFilters}
        data={categoryData}
        keyExtractor={item => item.id}
      />
    </View >
  );
}
export default FilterCard;
