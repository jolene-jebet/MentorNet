

import React from 'react';


import StudentForm from './forms/StudentForm';
import SchoolForm from './forms/SchoolForm';
import TeacherForm from './forms/TeacherForm';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (<NavigationContainer>
    <StudentForm/>
    </NavigationContainer>
  );
}
