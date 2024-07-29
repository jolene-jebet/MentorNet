import React, { useEffect } from 'react';
import Profile from './studentpages/profile';
import { studentOps, teacherOps, schoolOps } from './source/database';

const App = () => {
  useEffect(() => {
    const initializeData = async () => {
      try {
        // Example student profiles
        const studentProfiles = [
          {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            selectedClass: '10A',
            dateOfBirth: '2005-06-15',
            selectedGender: 'Male'
          },
          {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            selectedClass: '11B',
            dateOfBirth: '2004-09-23',
            selectedGender: 'Female'
          }
        ];

        // Example teacher profiles
        const teacherProfiles = [
          {
            teacherName: 'Alice Johnson',
            teacherID: 'T001',
            email: 'alice.johnson@example.com',
            telephone: '123-456-7890',
            dateOfBirth: '1980-01-25',
            selectedGender: 'Female'
          },
          {
            teacherName: 'Bob Brown',
            teacherID: 'T002',
            email: 'bob.brown@example.com',
            telephone: '987-654-3210',
            dateOfBirth: '1975-11-30',
            selectedGender: 'Male'
          }
        ];

        // Example school profiles
        const schoolProfiles = [
          {
            schoolName: 'Greenwood High',
            schoolLogo: 'logo_url_here',
            address: '123 Elm Street, Springfield',
            telephone: '555-1234',
            email: 'info@greenwoodhigh.edu',
            missionValues: 'Excellence in education'
          },
          {
            schoolName: 'Riverside Elementary',
            schoolLogo: 'logo_url_here',
            address: '456 Maple Avenue, Springfield',
            telephone: '555-5678',
            email: 'contact@riverside.edu',
            missionValues: 'Nurturing young minds'
          }
        ];

        // Insert student profiles
        await Promise.all(studentProfiles.map(profile =>
          studentOps.insert(
            profile.firstName,
            profile.lastName,
            profile.email,
            profile.selectedClass,
            profile.dateOfBirth,
            profile.selectedGender
          )
        ));

        // Insert teacher profiles
        await Promise.all(teacherProfiles.map(profile =>
          teacherOps.insert(
            profile.teacherName,
            profile.teacherID,
            profile.email,
            profile.telephone,
            profile.dateOfBirth,
            profile.selectedGender
          )
        ));

        // Insert school profiles
        await Promise.all(schoolProfiles.map(profile =>
          schoolOps.insert(
            profile.schoolName,
            profile.schoolLogo,
            profile.address,
            profile.telephone,
            profile.email,
            profile.missionValues
          )
        ));

        // Fetch and log all data after inserts
        const students = await studentOps.getAll();
        console.log('All Students:', students);

        const teachers = await teacherOps.getAll();
        console.log('All Teachers:', teachers);

        const schools = await schoolOps.getAll();
        console.log('All Schools:', schools);

      } catch (error) {
        console.log('Error initializing data:', error);
      }
    };

    initializeData();
  }, []);

  const loggedInStudentId = 1; // Replace this with your actual logic for determining the logged-in student ID

  return (
    <Profile studentId={loggedInStudentId} />
  );
}

export default App;
