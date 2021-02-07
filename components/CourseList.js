import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { getCourseTerm, terms } from '../utils/course';



const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');



  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return(
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm = {setSelectedTerm}/>
      </View>
      <CourseSelector courses={termCourses} view={view}/>
    </ScrollView>
    /*
    <View style={styles.courseList}>{ termCourses.map(course => <Course key={course.id} course={course} />) }
    </View>
    */
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default CourseList;
