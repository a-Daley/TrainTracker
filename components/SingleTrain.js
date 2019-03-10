import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'
import moment from 'moment'
import { grabTrainTweets } from '../redux/store/train'



class SingleTrain extends Component {
    constructor () {
        super ()
        this.state = {
            needsUpdate: false
        }
    }

    async componentDidUpdate() {
        if (this.state.needsUpdate === true) {
        this.setState({
            needsUpdate: false
        })
        await this.props.grabTrainTweets(this.props.selectedTrain.train)
        }
    }

    refreshPage = (train) => {
        this.props.grabTrainTweets(train)
        this.setState({
            needsUpdate: true
        })
    }

    render () {
        return (
            <View>
                <Header
                    // leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: "bold", fontFamily: "Copperplate-Bold"}}>{this.props.selectedTrain.train} Train</Text>}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.refreshPage(this.props.selectedTrain.train)} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}>
                </Header>
                <FlatList 
                    data={this.props.trainData} 
                    renderItem={({item}) => 
                    <Card key={item.id_str}>
                        <Text>{moment(item.created_at).startOf('day').fromNow()}</Text>
                        <Text>{item.text}</Text>
                    </Card>}
                    keyExtractor={item => item.id_str}
                    />
                    <ActivityIndicator size="large" color="#0D5F8A" />
            </View>

        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleTrain)