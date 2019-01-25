/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../styles';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
