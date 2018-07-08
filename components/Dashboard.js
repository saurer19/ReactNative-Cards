import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ListItem } from 'react-native-elements'
import { receiveDecks } from "../actions";
import { _retrieveData, _storeData } from "../utils/api";
import { initialData } from "../utils/constants";
class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Deck List',
  };
  componentDidMount() {
    _retrieveData().then(data => {
      console.log("data:", data);
      if (data == null || data == undefined) {
        console.log("vacio");
        _storeData(initialData);
        this.props.dispatch(receiveDecks(initialData));
      } else {
        console.log("lleno");
        this.props.dispatch(receiveDecks(data));
      }
    });
  }

  render() {
    const { decks, navigation } = this.props;
    if (Object.keys(decks).length === 0) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.title}>Select a Deck</Text>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => {
            const badge = {
              value: `${decks[item].questions.length}`,
              badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
              badgeTextStyle: { fontSize: 12 },
            };

            return(
              <ListItem
              hideChevron
              title={decks[item].title}
              badge={badge}
              containerStyle={{ backgroundColor: 'white', }}
              onPress={() => navigation.navigate("CardTabs", {deck:decks[item]})}
              titleStyle={styles.items}
            />
            )

          }}
          keyExtractor={item => decks[item].title}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    decks: state
  };
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
  },
  items:{
    fontSize: 18,
    margin: 15,
  }

});
export default connect(mapStateToProps)(Dashboard);
