import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import useFetch from '../../hooks/useFetch'
import MovieDetailCard from "../../Cards/MovieDetailCard";
import SuggestCard from "../../Cards/SuggestCard";

const URL = "http://10.0.2.2:3000/movies";

const MovieDetailPage = ({ route, navigation }) => {
  const { movieData } = route.params;
  const { data: movieSuggestData } = useFetch(`${URL}?genre_like=${movieData.genre}`);
  const { data: commentData } = useFetch(`http://10.0.2.2:3000/comments?movieId=${movieData.id}`);

  const renderSuggests = ({ item }) => {
    return (
      <SuggestCard data={item} />
    )
  }
  return (
    <ScrollView>
      <MovieDetailCard commentData={commentData} movieData={movieData} navigation={navigation} >
        <FlatList
          horizontal
          renderItem={renderSuggests}
          data={movieSuggestData.slice(0, 4)}
          keyExtractor={item => item.id}
        />
      </MovieDetailCard>
    </ScrollView>
  );
}
export default MovieDetailPage;
