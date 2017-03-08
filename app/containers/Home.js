import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative

class Home extends Component {
  searchPressed() {
    this.props.fetchRecipes('bacon,cucumber,babana')
  }

  render() {
    return <View style={{marginTop: 20}}>
      <View>
        <TouchableHighlight onPress={() => this.searchPressed()}>
          <Text>Fetch Recipes</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
      </ScrollView>
    </View>
  }
}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
