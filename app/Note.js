import React from 'react';
import { 
  Platform, 
  StatusBar, 
  StyleSheet, 
  View ,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';


export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>

      <Text style={styles.bulletPoint}></Text>
      <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>

      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>Done</Text>
      </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  note: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 3,
      borderBottomColor: '#527a7a',
  },

  noteText: {
      paddingLeft: 25,
      borderLeftColor: '#527a7a',

  },

  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
  },

  noteDeleteText: {
      color: 'white',
  },

  bulletPoint: {
      position: 'absolute',
      backgroundColor: '#527a7a',
      padding: 5,
      top: 10,
      bottom: 10,
      left: 10,
  }
})