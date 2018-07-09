import React from "react";
import { View,StyleSheet,  } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Constants } from 'expo';
import { setLocalNotification } from './utils/helpers'
import reducer from "./reducers";

import {MainNavigator} from './AppNavigator'

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    //    const initial = JSON.stringify(this.state.data);
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
  }
});