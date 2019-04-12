import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      joke: [],
      searchText: ""
    }
  }

  componentDidMount = () => {
     this.getCategories();
     this.getJoke();
  }

  getCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(results => results.json())
      .then(results => this.setState({categories : results}));
  }

  getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(results => results.json())
      .then(results => this.setState({joke: results}));
  }

  ListFromItems() {
    return this.state.categories.map(function(data, i) {
      return(
        <View key={i}>
          <Text style={{paddingLeft: 10}}>{data}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <TextInput
          style={{paddingLeft: 10}}
          placeholder="Search field"
          onChangeText={(text) => this.setState({searchText : text})}>
        </TextInput>
        <Text style={{paddingLeft: 10}}>{this.state.searchText}</Text>
        <Text></Text>
        {this.ListFromItems()}
        <Text></Text>

        <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>Random Joke: </Text>
        <Text></Text>
        <Text style={{paddingLeft: 20}}>{this.state.joke.value}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
