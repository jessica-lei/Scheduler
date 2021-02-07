import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';
//import CourseDetailScreen from './CourseDetailScreen';
import { firebase } from '../firebase';

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});


const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course })
  };
/*
  useEffect(() => {
    const fetchScheule = async () => {
      const response = await fetch(url);
      if (!response.ok)throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchScheule();
}, [])
*/
  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerStyle: {
    color: '#888',
    fontSize: 36,
    marginTop: 20,
    marginBottom: 10
  },
});

export default ScheduleScreen;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.3/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/