import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, Card, Icon } from 'react-native-elements'
import moment from 'moment'

class AllAlerts extends Component {  
    componentDidMount = async () => {
        this.props.grabTweets()
    }

    changeTime = (date) => {
        if (moment.duration(moment().diff(date))._data.hours < 1) {
            return (`${moment.duration(moment().diff(date))._data.minutes} minutes ago`)
        } else {
        return (`${moment.duration(moment().diff(date))._data.hours} hours and ${moment.duration(moment().diff(date))._data.minutes} minutes ago`)
        }
    }

    render () {
        return (
            <View>
                <Header
                    centerComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', fontFamily: "Copperplate-Bold"}}>Recent Alerts</Text>}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.props.grabTweets()} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}
                /> 
                <FlatList 
                    data={this.props.tweets} 
                    renderItem={({item}) => 
                    <Card>
                        <Text style={{fontWeight: "bold"}}>{this.changeTime(item.created_at)}</Text>
                        <Text key={item.id}>{item.full_text}</Text>
                    </Card>}
                    keyExtractor={item => item.id_str}
                />
            </View>
               
            
        )
    }

}
    
const mapStateToProps = (state) => {
    return {
        tweets: state.tweets,
    } 
}

const mapDispatchToProps = { grabTweets } 

export default connect(mapStateToProps, mapDispatchToProps)(AllAlerts)