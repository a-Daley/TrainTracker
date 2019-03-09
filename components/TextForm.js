import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'
import moment from 'moment'

export default class TextForm extends Component {
    constructor () {
        super ()
        this.state = {
            number: '',
            time: ''
        }
    }

    render () {
        return (
            <ScrollView>
                <Text>Hello World!</Text>
            </ScrollView>
        )
    }


}