import React from "react";
import { View, Text, Button } from "react-native";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
      count: 0
    };
  }
  next = e => {
    this.setState({
      count: this.state.count + 1,
      showAnswer: false
    });
  };
  render() {
    const { questions, title } = this.props.navigation.state.params;
    const { count, showAnswer } = this.state;
    if (count === questions.length) {
      console.log("aqui");
      return (
        <View>
          <Text>You finish the quizz</Text>
          <Button
            onPress={() => console.log("hola")}
            color="blue"
            title="Back"
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>{title}</Text>
          <Text>
            {count + 1}/{questions.length}
          </Text>
          {showAnswer ? (
            <View>
              <Text>{questions[count].answer}</Text>
              <Button
                onPress={() => this.setState({ showAnswer: false })}
                title="Show Question"
                color="blue"
                accessibilityLabel="Press this button"
              />
            </View>
          ) : (
            <View>
              <Text>{questions[count].question}</Text>
              <Button
                onPress={() => this.setState({ showAnswer: true })}
                title="Show Answer"
                color="blue"
                accessibilityLabel="Press this button"
              />
            </View>
          )}

          <Button
            onPress={this.next}
            title="Next"
            color="blue"
            accessibilityLabel="Press this button"
          />
        </View>
      );
    }
  }
}
