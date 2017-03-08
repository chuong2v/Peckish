import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from './../actions'
import Home from './Home'


class AppContainer extends Component {

  addRecipe() {
    this.props.addRecipe();
  }

  render() {
    return <Home {...this.props}></Home>
  }

}

function mapDispatchToPros(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {}}, mapDispatchToPros)(AppContainer);