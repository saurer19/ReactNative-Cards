import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

class DeckDetail extends React.Component {
  render() {
    console.log("props", this.props);
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{state.params.title}</Text>
        <Text>{state.params.questions.length}</Text>

        <Button
          onPress={() => navigate("Cards", state.params)}
          title="Start Quiz"
          color="blue"
          accessibilityLabel="Press this button"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function maptStateToProps(state) {
  console.log("map", this.props)
  const result = Object.keys(state).filter(
    deck => state[deck].title === this.props.navigation.params.title
  );
  console.log("result", result);

  return {
    deck: result
  };
}

export default connect(maptStateToProps)(DeckDetail);
