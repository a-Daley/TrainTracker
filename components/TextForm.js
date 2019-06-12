import React, { Component } from 'react';
import { Button, Text, View, StyleSheet,  } from 'react-native';
import { connect } from 'react-redux'
import { Input, Card, Overlay, Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import { grabTrainTweets } from '../redux/store/train'
import Axios from 'axios';
import moment from 'moment'


class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            name: '',
            number: '',
            train: '',
            tweets: [],
            isVisible: false,
            hasError: false,
            errorMessage: ""
        }

        this.setDate = this.setDate.bind(this)
        this.checkInputs = this.checkInputs.bind(this)
    }

    clearFields () {
        this.nameInput.clear()
        this.numberInput.clear()
    }

    checkInputs () {
        if (this.state.number.length < 10) {
            this.setState({hasError: true, })
        } else 
        if (this.state.name === '') {
            this.setState({hasError: true, })
        } else if (this.state.train === '') {
            this.setState({hasError: true})
        } else {
        this.clearFields()
        this.setState({isVisible: true})
        this.handleSubmit()
        }
    }

    changeTime = (date) => {
        if (moment.duration(moment().diff(date))._data.hours < 1) {
            return (`${moment.duration(moment().diff(date))._data.minutes} minutes ago`)
        } else {
        return (`${moment.duration(moment().diff(date))._data.hours} hours and ${moment.duration(moment().diff(date))._data.minutes} minutes ago`)
        }
    }

    setDate(newDate) {
    this.setState({chosenDate: newDate});
    }

    handleChange = () => {
        const label = event.label 
        this.setState({
            label: event.value
        })
    }
    
    handleSubmit = async () => {
        const {name, number, train} = this.state

        await this.props.grabTrainTweets(train)
        .then(async data => {
           const tweet = this.props.trainData[0].full_text 
           const time = this.changeTime(this.props.trainData[0].created_at)
           const message = `Hi ${name}, the last tweet about the ${train} train was about ${time}. Here's what it said: "${tweet}"`
           console.log(message)
            await Axios.post("http://localhost:8080/auth/texts", 
           {number: `+1${number}`, message: message})
        })
        .then(data => {

        })
        
    }

    render () {

    const trainLines = [{value: "1"}, {value: "2"}, {value: "3"}, {value: "4"}, {value: "5"}, {value: "6"}, {value: "7"}, {value: "A"}, {value: "B"}, {value: "C"}, {value: "D"}, {value: "E"}, {value: "F"}, {value: "G"}, {value: "J"}, {value: "L"}, {value: "M"}, {value: "N"}, {value: "Q"}, {value: "R"}, {value: "W"}, {value: "Z"}]

    return (
            <View>
                <Card
                    title='Never miss another update.'
                    >
                    <Text style={{marginBottom: 10}}> Sign up to get a text with the latest tweet about a train line. Schedule a one-off update or regular texts.
                    </Text>
                 </Card> 
                
                <Card>
                    <Text h1 style={styles.labelText}>Name</Text> 
                    <Input
                        testID="nameValue"
                        placeholder='e.g. Jane Smith' 
                        errorMessage='Name is required.'
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        autoCapitalize='words'
                        clearButtonMode = 'always'
                        ref={input => { this.nameInput = input }}
                    />
                    <Text h1 style={styles.labelText}>Number</Text> 
                    <Input
                        testID="numberValue"
                        placeholder='000-000-0000'
                        errorMessage='Phone numbers must be 11 digits long.'
                        onChangeText={(text) => this.setState({number: text})}
                        value={this.state.number}
                        shake={true}
                        clearButtonMode='always'
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                        ref={input => { this.numberInput = input }}
                    />
                     <Text h1 style={styles.labelText}>Train Line</Text> 
                    <Dropdown 
                        testID = "trainValue"
                        label="train"
                        data={trainLines}
                        onChangeText={(value) => this.setState({train: value})}
                        ref={input => { this.trainInput = input }}
                        error="Train line is required"
                    />
                    <Button
                        testID="submitButton"
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor = '#0D5F8A'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='SUBMIT' 
                        onPress={this.checkInputs} 
                        />
                </Card>

             <Overlay 
                isVisible={this.state.isVisible} 
                overlayBackgroundColor="#ACC6C7"
                windowBackgroundColor="gray"
                width={155}
                height={95}
                onBackdropPress={() => this.setState({ isVisible: false })}>
                <Text testID="sentMessage" style={styles.overlayText}>We're on it! Message Sent.</Text>
             </Overlay> 

             <Overlay 
                isVisible={this.state.hasError} 
                overlayBackgroundColor="red"
                width="auto"
                height="auto"
                onBackdropPress={() => this.setState({ hasError: false })}>
                <Text style={{color:"white", fontWeight: "bold"}}>Oops! Looks like you're missing information. Check your answers before submitting again.</Text>
             </Overlay>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    labelText: {
        color: "white",
        marginBottom: 10
    },

    overlayText: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        color: "#1D3A2E",
        marginBottom: 10,
        fontWeight: "bold"
    }
})

const mapStateToProps = state => {
    return {
        trainData: state.train.data,
        selectedTrain: state.train.selectedTrain
    }
}

const mapDispatchToProps = dispatch => {
    return {
        grabTrainTweets: train => dispatch(grabTrainTweets(train)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)