import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTrain from '../components/SingleTrain';

const TrainScreen = () => {

    return (
      <ScrollView style={styles.container}>
        <SingleTrain/>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default TrainScreen