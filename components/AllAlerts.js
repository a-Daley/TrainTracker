import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'

class AllAlerts extends Component {

    
    componentDidMount = async () => {
        this.props.grabTweets()
    }

    keyExtractor = (item, index) => index

    render () {
        console.log('tweets.length', this.props.tweets.length)
        return (
            <View>
                <Header
                    // statusBarProps={{ backgroundColor: '#E0C21F'}}
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.props.grabTweets()} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}
                />
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.tweets} 
                    // keyExtractor={item.index}
                    renderItem={({item}) => <Card><Text key={item.id}>{item.text}</Text></Card>}
                    
                />
            </View>
        )
    }

}
    
const mapStateToProps = (state) => {
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