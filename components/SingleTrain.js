import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { Header, Card, Icon } from 'react-native-elements'
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
                    centerComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: "bold", fontFamily: "Copperplate-Bold"}}>{this.props.selectedTrain.train} Train</Text>}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.refreshPage(this.props.selectedTrain.train)} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}>
                </Header>
                <FlatList 
                    data={this.props.trainData} 
                    renderItem={({item}) => 
                    <Card key={item.id_str}>
                        <Text style={{fontWeight: "bold"}}>{this.changeTime(item.created_at)}</Text>
                        <Text>{item.full_text}</Text>

                    </Card>}
                    keyExtractor={item => item.id_str}
                    />
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