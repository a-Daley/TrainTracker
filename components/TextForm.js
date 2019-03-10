import React, { Component } from 'react';
import { Picker, Button, Text, View, DatePickerIOS, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Input, Card, Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import { grabTrainTweets } from '../redux/store/train'
import Axios from 'axios';
import moment from 'moment'
import { serverURL } from '../secrets'

class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            name: '',
            number: '',
            train: '',
            tweets: []
        }

        this.setDate = this.setDate.bind(this);
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
           const tweet = this.props.trainData[0].text 
           const time = moment(this.props.trainData[0].created_at).startOf('day').fromNow() 
           const message = `Hi ${name}, the last tweet about the ${train} train was about ${time}. Here's what it said: "${tweet}"`
           console.log(message)
           const response = await Axios.post("http://localhost:8080/auth/texts", 
           {number: `+1${number}`, message: message})
        })
        .then(data => {
            console.log(response.data)
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
                    {/* <Divider></Divider> */}
                    <Input
                        placeholder='e.g. Jane Smith' 
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        autoCapitalize='words'
                        clearButtonMode = 'always'
                    />
                    <Text h1 style={styles.labelText}>Number</Text> 
                    <Input
                        placeholder='000-000-0000'
                        leftIcon={<Icon name='phone' size={24} color='gray'/>}
                        onChangeText={(text) => this.setState({number: text})}
                        value={this.state.number}
                        shake={true}
                        clearButtonMode='always'
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                    />
                    <Dropdown 
                        label="train"
                        data={trainLines}
                        onChangeText={(value) => this.setState({train: value})}
                    />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor = '#0D5F8A'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='SUBMIT' 
                        onPress={this.handleSubmit} 
                        />
                </Card>
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
        color: 'green', 
        marginBottom: 10
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