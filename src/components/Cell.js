/* @flow weak */

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../styles';

const Cell = ({ name, onPressFollow, following, image, id }) => (
  <View
    style={[
      styles.container,
      { backgroundColor: id % 2 === 0 ? colors.white : colors.primaryOpacity },
    ]}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>

    <TouchableOpacity
      onPress={() => onPressFollow(id)}
      style={[
        styles.button,
        { backgroundColor: following ? colors.secondary : colors.primary },
      ]}
    >
      <Text style={styles.buttonTitle}>
        {following ? 'SEGUINDO' : 'SEGUIR'}
      </Text>
    </TouchableOpacity>
  </View>
);

export default Cell;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 55,
    width: 55,
  },
  text: {
    fontFamily: 'Barlow',
    fontSize: 18,
    color: colors.black,
    marginLeft: 8,
  },
  button: {
    width: 85,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: 'Barlow',
    fontSize: 14,
    color: colors.white,
  },
});
