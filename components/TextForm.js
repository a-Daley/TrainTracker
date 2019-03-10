import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View, DatePickerIOS, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, ListItem, Card, List, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import moment from 'moment'
import { Input } from 'react-native-elements';

export default class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date()
        }

        this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
    handleChange = (event) => {
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
                    
                <View style={styles.container}>
                    <DatePickerIOS
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}/>
                </View> 
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0,marginBottom: 0}}
                    title='SUBMIT' />
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
});

