import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
export default class Cards extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title: title
    };
  };
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
    const { questions } = this.props.navigation.state.params;
    const { count, showAnswer } = this.state;
    const {navigate} = this.props.navigation

    if (count === questions.length) {
      return (
        <View  style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>You finish the quizz</Text>
          </View>
          <View  style={{ flex: 2 }}>
          <Button
            onPress={() => navigate('DeckDetail')}
            backgroundColor="blue"
            title="Back"
          />
          </View>
          
        </View>
      );
    } else {
      return (
        <View  style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.count}>
              {count + 1}/{questions.length}
            </Text>
            {showAnswer ? (
              <Text style={styles.title}>{questions[count].answer}</Text>
            ) : (
              <Text style={styles.title}>{questions[count].question}</Text>
            )}
          </View>
          <View style={{ flex: 2 }}>
            {showAnswer ? (
              <Button
                onPress={() => this.setState({ showAnswer: false })}
                title="Show Question"
                backgroundColor="blue"
                large
              />
            ) : (
              <Button
                onPress={() => this.setState({ showAnswer: true })}
                title="Show Answer"
                backgroundColor="blue"
                large
              />
            )}
            <View style={{paddingTop:20}}>
            <Button
              onPress={this.next}
              title="Next"
              backgroundColor="green"
              large
            />
            </View>
            
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    margin: 20
  },
  count: {
    fontSize: 18,
    margin: 15
  }
});
