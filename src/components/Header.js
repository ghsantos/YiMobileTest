/* @flow weak */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../styles';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>EXCELENTE!</Text>
      </View>
    </View>

    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>
        Para aproveitar ao máximo, se conecte com seus amigos!
      </Text>
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTitle}>CONTINUAR</Text>
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.primary,
    margin: 8,
    padding: 2,
    height: 130,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleContainer: {
    borderWidth: 4,
    borderColor: colors.white,
    position: 'absolute',
    top: 12,
    left: -8,
  },
  titleContent: {
    borderLeftColor: colors.secondary,
    borderLeftWidth: 4,
    paddingLeft: 8,
  },
  title: {
    color: colors.secondary,
    marginTop: -10,
    marginBottom: -4,
    fontSize: 38,
    fontFamily: 'Barlow-Bold',
  },
  subtitleContainer: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 10,
  },
  subtitle: {
    color: colors.primary,
    fontSize: 19,
    fontFamily: 'Barlow-Bold',
    lineHeight: 19,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 6,
  },
  buttonTitle: {
    fontFamily: 'Barlow-Semi-Bold',
    color: colors.white,
  },
});
