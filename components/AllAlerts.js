import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { grabTweets } from '../redux/store/tweets'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'
import moment from 'moment'

class AllAlerts extends Component {  
    componentDidMount = async () => {
        this.props.grabTweets()
    }

    render () {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Recent Alerts</Text>}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.props.grabTweets()} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}
                /> 
                <FlatList 
                    data={this.props.tweets} 
                    renderItem={({item}) => 
                    <Card>
                        <Text style={{fontWeight: "bold"}}>{moment(item.created_at).startOf('day').fromNow()}</Text>
                        <Text key={item.id}>{item.text}</Text>
                    </Card>}
                    keyExtractor={item => item.id_str}
                />
                {/* <ActivityIndicator size="large" color="#0D5F8A" /> */}
            </View>
               
            
        )
    }

}
    
const mapStateToProps = (state) => {
    return {
        tweets: state.tweets,
    } 
}

// const mapDispatchToProps = dispatch => {
//     return {
//         grabTweets: () => {dispatch(grabTweets())}
//     }
// }

const mapDispatchToProps = {grabTweets} 

export default connect(mapStateToProps, mapDispatchToProps)(AllAlerts)