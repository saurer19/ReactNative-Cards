import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {connect} from 'react-redux'
import {Button } from "react-native-elements";

 class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      deck,
      title: deck.title
    }
  }
  render() {
      console.log("props", this.props)
      const {deck} = this.props
      const {navigate} = this.props.navigation
      
    return (
      <View style={styles.container}>
        <View style={styles.spaces}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
        </View>
        
        <View style={styles.spaces}>
        <View style={styles.spaces}>
        <Button
          backgroundColor="#2089DC"
          onPress={() => navigate('Cards', deck)}
          large
          title="Start Quizz"
        />
        </View>
        <View style={styles.spaces}>
        <Button
          backgroundColor="red"
          onPress={() => navigate('Dashboard')}
          
          title="Go Back"
        />
        </View>
        
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaces:{
    flex:2,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapStateToProps(state,{navigation}) {
  const { deck } = navigation.state.params
  const deckKeys = Object.keys(state)
  var result = deckKeys.filter(key => { return key.indexOf(deck.title) !== -1 });

     console.log('result', result)
  return {
    deck:state[result],
    decks: state
  };
}

export default connect(mapStateToProps)(DeckDetail);
