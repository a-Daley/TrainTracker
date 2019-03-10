import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextForm from '../components/TextForm'
import { Icon, Header } from 'react-native-elements'

export default class TextsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={<Text style={{color: '#fff', fontSize: 24}}>Notifications</Text>}

          containerStyle={{ backgroundColor: "#1D3A2E", justifyContent: 'space-around'}}
        />
        <TextForm />
      </View>
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
