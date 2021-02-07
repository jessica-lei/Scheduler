import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CourseList from './CourseList';



const TermButton = ({term, setSelectedTerm, isActive}) => (
  <TouchableOpacity style={styles[isActive ? 'termButtonActive' : 'termButton']}
    onPress={ () => setSelectedTerm(term)}>
    <Text style={styles.termText}>{term}</Text>
  </TouchableOpacity>
);


const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
    <View style={styles.termSelector}>
      {
        terms.map(term => (
          <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
          isActive={term === selectedTerm}/>
        ))
      }
    </View>
  );

const termButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 50,
  padding: 10,
  minWidth: 110,
  maxWidth: 110,
};

const styles = StyleSheet.create({
  termSelector: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //alignContent: "center",
    width: 450,
  },
  termButton: {
    ...termButtonBase,
    backgroundColor: '#4f9f64',
  },
  termButtonActive: {
    ...termButtonBase,
    backgroundColor: '#105f25',
  },
  termText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TermSelector;