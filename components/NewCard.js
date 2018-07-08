import React from "react";
import { View, StyleSheet } from "react-native";
import { addCard } from "../actions";
import { connect } from "react-redux";
import { _storeData } from "../utils/api";
import { FormLabel, FormInput, Button } from "react-native-elements";
class NewCard extends React.Component {
    static navigationOptions = {
        title: 'Add Card',
      };
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    const { deck } = this.props.navigation.state.params;
    console.log("actual", this.props.decks);
    console.log("next", nextProps.decks);
    if (
      this.props.decks[deck.title].questions.length !==
      nextProps.decks[deck.title].questions.length
    ) {
      _storeData(nextProps.decks);
    }
  }

  handleSubmit = e => {
    const { question, answer } = this.state;

    e.preventDefault();
    if (question.length > 0 && answer.length > 0) {
      const { deck } = this.props.navigation.state.params;
      let newCard = {
        question,
        answer
      };
      console.log(newCard);
      this.props.dispatch(addCard(newCard, deck.title));
      this.setState({
        question: "",
        answer: ""
      });
    }
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <FormLabel>Insert a Question</FormLabel>
        <FormInput
          value={question}
          onChangeText={question => this.setState({ question })}
        />
        <FormLabel style={styles.separator}>Insert a Answer</FormLabel>
        <FormInput
          value={answer}
          onChangeText={answer => this.setState({ answer })}
        />

        <Button
          backgroundColor="#2089DC"
          onPress={this.handleSubmit}
          large
          rightIcon={{ name: "code" }}
          disabled={question.length === 0 || answer.length === 0}
          disabledStyle="#9499A4"
          title="Submit!"
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    decks: state
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  
});
export default connect(mapStateToProps)(NewCard);
