import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { hasConflict } from '../utils/course';
import Course from './Course';
import TermSelector from './TermSelector';

const CourseSelector = ({ courses, view }) => {
  const [selected, setSelected] = useState([]);

  const toggle = course => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course] 
  ));

  return (
    <View style={styles.courseSelector}>
      {
        courses.map(course =>
          <Course key={course.id} course={course}
          isSelected={selected.includes(course)}
          select={toggle}
          isDisabled={hasConflict(course, selected)}
          view={view}
          />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  courseSelector: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default CourseSelector;