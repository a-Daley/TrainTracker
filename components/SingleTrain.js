import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'

export default class SingleTrain extends Component {
    render () {
        return (
            <View>
                <Text>Testing, Testing 123</Text>
            </View>
        )
    }
}