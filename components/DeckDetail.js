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
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} Cards</Text>
        </View>
        
        <View style={styles.spaces}>
        <View style={styles.spaces}>
        <Button
          backgroundColor="#2089DC"
          onPress={() => navigate('Cards', deck)}
          large
          title="Start Quiz"
        />
        </View>
        <View style={styles.spaces}>
        <Button
          backgroundColor="red"
          onPress={() => navigate('Dashboard')}
          
          title="Back"
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
  title: {
    fontSize: 28,
    margin: 20
  },
  cards: {
    fontSize: 18,
    margin: 15,
    color:'grey'
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
