import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCourseNumber, hasConflict } from '../utils/course';

const Course = ({course, isSelected, select, isDisabled, view}) => (
  <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' :
   isDisabled ? 'courseButtonDisabled' : 'courseButton']}
   onPress={() => { if (!isDisabled) select(course); }}
   onLongPress={() => view(course)}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
  );



const courseButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 80,
  padding: 10,
  minWidth: 110,
  maxWidth: 110,
};

const styles = StyleSheet.create({
  courseButton: {
    ...courseButtonBase,
    backgroundColor: '#66b0ff'
  },
  courseButtonDisabled: {
    ...courseButtonBase,
    backgroundColor: '#d3d3d3'
  },
  courseButtonSelected: {
    ...courseButtonBase,
    backgroundColor: '#004a99'
  },
  courseText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default Course;