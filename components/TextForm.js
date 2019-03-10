import React, { Component } from 'react';
import { Picker, Button, Text, View, DatePickerIOS, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Input, Header, ListItem, Card, List, Icon, FormInput, FormValidationMessage, Divider } from 'react-native-elements'
import moment from 'moment'
import { Dropdown } from 'react-native-material-dropdown'

export default class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            name: '',
            number: '',
            train: ''
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
    
    onPress = () => {
    // call getValue() to get the values of the form
        const value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value)
        }
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
                        onPress={() => {console.log('this.state', this.state)}} 
                        />
                </Card>
                {/* <Picker
                        selectedValue={this.state.train}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) => this.setState({train: itemValue})}>
                        {trainLines.map(train=> {
                            return <Picker.Item label={train} value={train} />
                        })}
                    </Picker> */}
                {/* <View style={styles.container}>
//                     <DatePickerIOS
//                         date={this.state.chosenDate}
//                         onDateChange={this.setDate}/>
//                 </View>  */}
            
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
});

