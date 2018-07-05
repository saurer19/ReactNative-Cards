import React from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import reducer from "./reducers";
import Dashboard from "./components/Dashboard";
import NewDeck from "./components/NewDeck";
import DeckDetail from "./components/DeckDetail";
import NewCard from "./components/NewCard";
import Cards from './components/Cards'
const DeckTabs = createMaterialTopTabNavigator({
  Dashboard: { screen: Dashboard },
  NewDeck: { screen: NewDeck }
});
const CardTabs = createMaterialTopTabNavigator({
  DeckDetail: { screen: DeckDetail },
  NewCard: { screen: NewCard }
});
const MainNavigator = createStackNavigator({
  DeckTabs: { screen: DeckTabs },
  CardTabs: { screen: CardTabs },
  Cards:{screen:Cards}
});

export default class App extends React.Component {
  render() {
    //    const initial = JSON.stringify(this.state.data);
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
