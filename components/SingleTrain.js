import React, { Component } from 'react';
import { ScrollView, FlatList, Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { Header, ListItem, Card, List, Icon } from 'react-native-elements'
import moment from 'moment'



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

    render () {
        return (
            <View>
                <Header
                    // leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: "bold"}}>{this.props.selectedTrain.train} Train</Text>}
                    rightComponent={<Icon name='refresh' color='#fff' onPress={() => this.props.grabTweets()} />}
                    containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}>
                </Header>
                <FlatList 
                    data={this.props.trainData} 
                    renderItem={({item}) => 
                    <Card key={item.id_str}>
                        <Text>{moment(item.created_at).startOf('day').fromNow()}</Text>
                        <Text>{item.text}</Text>
                    </Card>}
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