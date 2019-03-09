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
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
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
