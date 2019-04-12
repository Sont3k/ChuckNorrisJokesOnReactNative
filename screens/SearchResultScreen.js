import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { TextInput, View, Text } from 'react-native';

export default class SearchResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  componentDidMount = () => {
     this.getItems();
  }

  getItems() {
    fetch('https://api.chucknorris.io/jokes/search?query={query}')
      .then(results => results.json())
      .then(results => this.setState({items: results}));
  }

  render() {
    //return null;
    return (
      <View>
        <Text>{this.state.items.query}</Text>
      </View>
    );
  }
}
