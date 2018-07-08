import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Dashboard from "./components/Dashboard";
import NewDeck from "./components/NewDeck";
import DeckDetail from "./components/DeckDetail";
import NewCard from "./components/NewCard";
import Cards from "./components/Cards";
const DeckTabs = createMaterialTopTabNavigator(
  {
    Dashboard: { screen: Dashboard },
    NewDeck: { screen: NewDeck }
  }
);
const CardTabs = createMaterialTopTabNavigator({
  DeckDetail: { screen: DeckDetail },
  NewCard: { screen: NewCard }
});
export const MainNavigator = createStackNavigator({
  DeckTabs: { screen: DeckTabs, navigationOptions: { header: null} },
  CardTabs: { screen: CardTabs, navigationOptions: { header: null}},
  Cards: { screen: Cards }
});
