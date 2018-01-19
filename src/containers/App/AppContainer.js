import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MainNavigator } from '../../navigators';
import * as colors from '../../constants/colors';
import { WIDTH, HEIGHT, CONTENT_HEIGHT } from '../../constants/dimensions';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.BLUE_DARK, paddingTop: 20 }}>
        <StatusBar barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

export default connect(state => ({
  user: state.user,
  loading: state.loading,
}))(AppContainer);

var styles = StyleSheet.create({
  loader: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT / 2 - 40,
    left: WIDTH / 2 - 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});