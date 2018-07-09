import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import {clearLocalNotification,setLocalNotification} from '../utils/helpers'
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
      count: 0,
      correct:0,
      incorrect:0
    };
  }
  next = (value) => {
    if(value==='incorrect'){
      this.setState({
        incorrect: this.state.incorrect + 1,
      });
    }
    if(value==='correct'){
      this.setState({
        correct: this.state.correct + 1,
      });
    }
    this.setState({
      count: this.state.count + 1,
      showAnswer: false
    });
  };
  render() {
    const { questions } = this.props.navigation.state.params;
    const { count,showAnswer } = this.state;
    const {navigate} = this.props.navigation

    if (count === questions.length) {
      clearLocalNotification()
      .then(setLocalNotification)

      return (
        <View  style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>You finish the quiz</Text>
          <Text style={styles.result}>Correct answer: {this.state.correct}</Text>
          <Text style={styles.result}>Incorrect answer: {this.state.incorrect}</Text>
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
            <View style={{paddingTop:20,flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
            <Button
              onPress={()=>{this.next("correct")}}
              title="Correct"
              backgroundColor="green"
              large
            />
            <Button
              onPress={()=>{this.next("incorrect")}}
              title="Incorrect"
              backgroundColor="red"
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
  },
  result:{
    fontSize:18,
    marginLeft:30

  }
});
