import React from 'react'
import {View, Text,TextInput,TouchableOpacity} from 'react-native'
import {addCard} from '../actions'
import {connect} from 'react-redux'
class NewCard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            question:'',
            answer:''
        }
    }

    handleSubmit= e =>{
        console.log('1')
        e.preventDefault();
        if(this.state.question.length >0 && this.state.answer.length>0){
            const {state,navigate} = this.props.navigation
            let newCard = {
                    question: this.state.question,
                    answer:this.state.answer
                }  
                console.log('2', newCard, state.params.title)

            this.props.addCard(newCard, state.params.title)
        }
       
    }
    render(){
        console.log("cards", this.props.navigation)
        return(
            <View>
                <Text>
                    Insert a Question
                </Text>
                <TextInput
                    value={this.state.question}
                    onChangeText={(question) => this.setState({question})}
                />
                <Text>
                    Insert a Answer
                </Text>
                <TextInput
                    value={this.state.answer}
                    onChangeText={(answer) => this.setState({answer})}
                />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Submit!</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}
const mapDispatchToProps = {
    addCard
  }

export default connect(null,mapDispatchToProps)(NewCard)