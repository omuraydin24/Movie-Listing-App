import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./MovieDetailCard.style"
import CommentCard from "../CommentCard";

const MovieDetailCard = ({ movieData, navigation, children, commentData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log("commentData.comment", commentData[0])
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left-circle" size={40} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={styles.info}>
          <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }} />
          <View style={[styles.sideContainer, styles.elevation]}>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={30} color="#FCC419" />
              <Text style={styles.rate1}>
                {movieData.rate}
                <Text style={styles.rate2}>/10</Text>
              </Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.commentContainer}>
                <Icon name="chat-processing-outline" size={30} />
                <Text style={styles.rate1}>Comments</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{movieData.name}</Text>
          <Text style={styles.director}>Director</Text>
          <Text style={styles.director}>{movieData.director}</Text>
          <View style={styles.genreListContainer}>
            {movieData.genre.map((item, index) => {
              return (
                <View style={styles.genreContainer} key={index}>
                  <Text style={styles.genre}>{item}</Text>
                </View>
              )
            })}
          </View>
          <Text style={styles.briefText}>{movieData.brief}</Text>
          <Text style={styles.castTitle}>Cast</Text>
        </View>

        <View style={styles.grid}>
          {
            movieData.cast.map((item, index) => {
              return (
                <View key={index} style={styles.castContainer}>
                  <Image style={styles.castImage} source={{ uri: "https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" }} />
                  <Text style={styles.castName}>{item}</Text>
                </View>
              )
            })
          }
        </View>
        <TouchableWithoutFeedback style={styles.modalButton} onPress={() => setModalVisible(true)}>
          <View style={styles.commentModalContainer}>
            <Icon name="chat-processing-outline" size={30} color={"black"} />
            {commentData[0] === undefined ?
              <Text style={styles.showCommentText}>Write the first comment...</Text>
              :
              <Text style={styles.showCommentText}>Show comments...</Text>
            }
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <CommentCard movieData={movieData} commentData={commentData} />
          </Modal>
        </View>
      </ScrollView>
      <View style={styles.suggestContainer}>
        <Text style={styles.suggestTitle}>Suggested Movies</Text>
        {children}
      </View>
    </View>
  );
}
export default MovieDetailCard;