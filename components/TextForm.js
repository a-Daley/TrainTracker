import React, { Component } from 'react';
import { TextInput, ScrollView, FlatList, Button, Text, View, DatePickerIOS, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Input, Header, ListItem, Card, List, Icon, FormInput, FormValidationMessage, Divider } from 'react-native-elements'
import moment from 'moment'

export default class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            name: '',
            number: ''
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

    render () {
        return (
            <View>
                <Card
                    title='Keep up on the go!'
                    image={require('../assets/images/man-on-train.jpeg')}>
                    <Text style={{marginBottom: 10}}> The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                 </Card> 
                
                <Card>
                    <Text h1>Sign Up</Text> 
                    <Divider></Divider>
                    <Input
                        placeholder='e.g. Jane Smith' 
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                    />
                    <Input
                        placeholder='Phone Number'
                        leftIcon={<Icon name='phone' size={24} color='gray'/>}
                        onChangeText={(text) => this.setState({number: text})}
                        value={this.state.number}
                        shake={true}
                    />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor = '#0D5F8A'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='SUBMIT' />
                </Card>
                
                {/* <View style={styles.container}>
                    <DatePickerIOS
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}/>
                </View>  */}
            
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

