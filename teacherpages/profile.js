import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import initializeDatabase from '../components/database';

const TeacherProfile = ({ teacherId }) => {
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [uuserId, setUserId] = useState(null);
    const [teacherData, setteacherData] = useState(null);
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await AsyncStorage.getItem('userId');
                if (id !== null) {
                    setUserId(id);
                    await fetchSchoolData(id); // Fetch school data using user ID
                } else {
                    console.log('No user ID found');
                }
            } catch (error) {
                console.error('Error retrieving user ID from AsyncStorage:', error);
            }
        };

        fetchUserId();
    }, []);

    const fetchSchoolData = async (userId) => {
        try {
            const { teacherOps } = await initializeDatabase();
            // if (!userId) {
            //     console.log('No user ID provided');
            //     return;
            // }
            const schoolInfo = await teacherOps.getById(userId); // Assuming you want to fetch school by userId
            if (schoolInfo) {
                setteacherData(schoolInfo);
                console.log('School data:', schoolInfo);
            } else {
                console.log('No school data found for this user ID');
            }
        } catch (error) {
            console.error('Error fetching school data:', error);
        }
    };


  if (!teacherData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </SafeAreaView>
    );
  }


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>{`${teacherData?.teacherName} `}</Text>
  
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Teacher ID: </Text>
          {teacherData?.teacherID}
        </Text>
        
        <Text style={styles.detail}>
          <Text style={styles.label}>Date of Birth: </Text>
          {formatDate(teacherData?.dateOfBirth)}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Gender: </Text>
          {teacherData?.selectedGender}
        </Text>
      </View>
    </SafeAreaView>
  );
};

TeacherProfile.propTypes = {
  teacherId: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImageContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 75,
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#5a4f4f',
    padding: 15,
    borderRadius: 10,
    width: '80%',
  },
  detail: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TeacherProfile;