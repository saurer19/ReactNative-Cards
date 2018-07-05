import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { _retrieveData, _storeData } from "../utils/api";
import { initialData } from "../utils/constants";
class Dashboard extends React.Component {
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

    console.log(this.props.decks);
    console.log(this.props.navigation);
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
        <Text>{Object.keys(decks)}</Text>
        <Text>{Object.keys(decks).length}</Text>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CardTabs", decks[item])}
            >
              <Text>{decks[item].title}</Text>
              <Text>{decks[item].questions.length}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => decks[item].title}
        />
      </View>
    );
  }
}

function maptStateToProps(state) {
  console.log("state", state);
  return {
    decks: state
  };
}

export default connect(maptStateToProps)(Dashboard);
