

import React from 'react';


import StudentForm from './forms/StudentForm';
import SchoolForm from './forms/SchoolForm';
import TeacherForm from './forms/TeacherForm';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './ownerpages/profile';
import Main from './screens/MainComponent';
// import Profile from './studentpages/profile';
// import Profile from './teacherpages/profile';
export default function App() {
  return (<NavigationContainer>
    <Main/>
    </NavigationContainer>
  );
}
