import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ListCard.style'

const ListCard = ({ data, onPress }) => {
  return (
    <View>
      <View style={styles.movieContainer}>
        <TouchableOpacity onPress={onPress}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }} />
              <View style={styles.briefContainer}>
                <Text style={styles.brief}>{data.brief.substring(0, 80)}...</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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

export default ListCard;