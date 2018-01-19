import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  handlePromosPress = () => {
    this.props.navigation.navigate('Promos')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity onPress={this.handlePromosPress}>
          <Text>Promos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(state => ({
  loading: state.loading,
}))(HomeContainer);
