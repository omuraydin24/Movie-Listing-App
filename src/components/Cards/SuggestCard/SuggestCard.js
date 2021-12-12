import React from 'react';
import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SuggestCard.style'

const SuggestCard = ({ data }) => {
  return (
    <View style={styles.main}>
      <View style={styles.movieContainer}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }} />
          </View>
        </View>

      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        {data.genre.map((item, index) => {
          return (
            <View style={styles.genreContainer} key={index}>
              <Text style={styles.genre}>{item}</Text>
            </View>
          )
        })}
        <View style={styles.rateContainer}>
          <Icon name="star" size={20} color="#FCC419" />
          <Text style={styles.rate}>{data.rate}</Text>
        </View>
      </View>
    </View>
  );
}

export default SuggestCard;