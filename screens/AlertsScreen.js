import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AllAlerts from '../components/AllAlerts';

export default class AlertsScreen extends React.Component {
  static navigationOptions = {
    title: 'Alerts',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <AllAlerts />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
