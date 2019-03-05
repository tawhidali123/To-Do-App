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
  KeyboardAvoidingView,
} from 'react-native';

import Note from './Note';


export default class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} 
        keyval={key} 
        val={val} 
        deleteMethod={ ()=> this.deleteNote(key) }
      />
    });


    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>To_Do List</Text>
          </View>

          <ScrollView style={styles.body}>
            {notes}
          </ScrollView>

          <View style={styles.footer}>
            <TextInput 
            style={styles.input}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Input note here'></TextInput>
          </View>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.bttnText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

  addNote() {
    if (this.state.noteText) {

      let d = new Date();
      this.state.noteArray.push({
        'date': (d.getMonth() +1) + '/' + d.getDate() + '/' + d.getFullYear(),

        'note': this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''});
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#527a7a',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },

  headerText: {
    fontSize: 24,
    color: 'white',
  },

  body: {
    flex: 1,
    marginBottom: 50,
  },

  bodyText: {
    fontSize: 25,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  
  },

  input: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: '#b1cdcd',
  },

  addButton: {
    position: 'absolute',
    backgroundColor: '#669999',
    zIndex: 11,
    right: 20,
    bottom: 90,
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bttnText: {
    color: 'white',
    fontSize: 30,
  },
})
