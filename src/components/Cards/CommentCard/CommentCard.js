import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useFetch from "../../hooks/useFetch";
import CommentInput from "../../CommentInput";
const URL = "http://10.0.2.2:3000/comments";
import styles from "./CommentCard.style";

const Commentcard = ({ movieData }) => {
  const [arrayData, setArrayData] = useState([commentData]);
  const {
    loading,
    error,
    data: commentData
  } = useFetch(`${URL}?movieId=${movieData.id}`)

  useEffect(() => {
    setArrayData(commentData)
  }, [commentData])

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
  const renderCommends = (comment) => {
    return (
      <View style={styles.commentContainer}>
        <Icon name="account-circle" size={30} color="black" />
        <View style={styles.commentTextContainer}>
          <Text style={styles.commentText}>{comment.item.comment}</Text>
        </View>
      </View>
    )
  }
  const handleInput = (comment) => {
    const productData = { comment: comment, id: new Date() }
    setArrayData([...arrayData, productData])
  }

  return (
    <View style={styles.commentBox}>
      <Text style={styles.commentBoxTitle}>Comments</Text>
      <FlatList
        renderItem={renderCommends}
        data={arrayData}
        keyExtractor={item => item.id}
      />
      <CommentInput onAddComment={handleInput} />
    </View>
  );
}

export default Commentcard;
