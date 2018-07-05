import React from 'react'
import {View, Text,TextInput,TouchableOpacity} from 'react-native'
import {addDeck} from '../actions'
import {connect} from 'react-redux'
class NewDeck extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:''
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
        this.props.addDeck(newDeck)
        submitEntry(newDeck)
    }
    render(){
        return(
            <View>
                <Text>
                    Insert a name for you deck
                </Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({name})}
                />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Submit!</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}
const mapDispatchToProps = {
    addDeck
  }

export default connect(null,mapDispatchToProps)(NewDeck)