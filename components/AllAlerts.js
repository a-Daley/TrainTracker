import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { ListItem, Card } from 'react-native-elements'

class AllAlerts extends Component {

    
    componentDidMount = async () => {
        this.props.grabTweets()
    }

    render () {
        console.log('tweets.length', this.props.tweets.length)
        return (
            <View>
                <FlatList data={this.props.tweets} renderItem={({item}) => <Card><Text>{item.text}</Text></Card>}
                />
            </View>
        )
    }

}
    
const mapStateToProps = (state) => {
    console.log('state.tweets', state.tweets)
    console.log('state.train', state.train)
    return {
        tweets: state.tweets,
        train: state.train
    } 
}

// const mapDispatchToProps = dispatch => {
//     return {
//         grabTweets: () => {dispatch(grabTweets())}
//     }
// }

const mapDispatchToProps = {grabTweets} 

export default connect(mapStateToProps, mapDispatchToProps)(AllAlerts)