import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class PromosContainer extends Component {
  handleBackPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Promos and Deals</Text>
        <TouchableOpacity onPress={this.handleBackPress}>
          <Text>Back</Text>
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
}))(PromosContainer);
