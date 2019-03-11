import React, {Component} from 'react';
import { Text, View, ListItem, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }

const StyleContent = StyleSheet.create({
    content:{
        backgroundColor: '#2e2e38',
        position:'absolute',
        top:150,
        bottom:80,
        right: 0,
        left: 0,
    },
});

export default Content;