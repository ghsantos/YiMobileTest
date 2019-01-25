/* @flow */

import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { getFeed } from '../api';
import { colors } from '../styles';
import Cell from '../components/Cell';
import Header from '../components/Header';

export default class Home extends Component {
  state = {
    feed: [],
  };

  componentDidMount() {
    getFeed()
      .then(feed =>
        feed.map((item, index) => ({
          ...item,
          id: (index + 1).toString(),
          following: false,
        }))
      )
      .then(feed => this.setState({ feed }));
  }

  _keyExtractor = (item, index) => item.id;

  onPressFollow = id => {
    this.setState(prevState => ({
      feed: prevState.feed.map(item =>
        item.id === id ? { ...item, following: !item.following } : { ...item }
      ),
    }));
  };

  renderItem = ({ item }) => (
    <Cell
      id={item.id}
      name={item.name}
      onPressFollow={this.onPressFollow}
      following={item.following}
      image={item.image}
    />
  );

  render() {
    console.log(this.state.feed);

    return (
      <View style={styles.container}>
        <Header />

        <FlatList
          data={this.state.feed}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
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
