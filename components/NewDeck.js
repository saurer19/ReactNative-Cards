import React from 'react'
import {View, StyleSheet} from 'react-native'
import {addDeck} from '../actions'
import {connect} from 'react-redux'
import { FormLabel, FormInput, Button } from "react-native-elements";
import { _storeData } from "../utils/api";

class NewDeck extends React.Component{
    static navigationOptions = {
        title: 'Add Deck',
      };
    constructor(props){
        super(props)
        this.state ={
            name:''
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("actual", this.props.decks);
        console.log("next", nextProps.decks);
        if (
          Object.keys(this.props.decks).length !==
          Object.keys(nextProps.decks).length
        ) {
          _storeData(nextProps.decks);
        }
      }
    handleSubmit= e =>{
        e.preventDefault();
        let newDeck = {
            [this.state.name]:{
                title: this.state.name,
                questions:[]
            }  
        }
        this.props.dispatch(addDeck(newDeck))
        this.setState({name:''})
    }
    render(){
        return(


<View style={styles.container}>
<FormLabel>Insert a name for you deck</FormLabel>
<FormInput
  value={this.state.name}
  onChangeText={(name) => this.setState({name})}
/>


<Button
  backgroundColor="#2089DC"
  onPress={this.handleSubmit}
  large
  rightIcon={{ name: "code" }}
  disabled={this.state.name.length === 0 }
  disabledStyle="#9499A4"
  title="Submit!"
/>
</View>
        )
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
    }
})
export default connect(mapStateToProps)(NewDeck);
