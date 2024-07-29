import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { studentOps } from '../source/database';

const Profile = ({ studentId }) => {
  const [studentProfile, setStudentProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const profile = await studentOps.getById(studentId);
        setStudentProfile(profile);
      } catch (error) {
        console.error('Error fetching student profile:', error);
        setError('Failed to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentProfile();
  }, [studentId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  if (!studentProfile) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Student not found.</Text>
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
          source={studentProfile.profileImage ? { uri: studentProfile.profileImage } : require('../assets/images/exam-svgrepo-com.svg')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>{`${studentProfile.firstName} ${studentProfile.lastName}`}</Text>
      <Text style={styles.id}>{studentProfile.id}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Class: </Text>
          {studentProfile.selectedClass}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Email: </Text>
          {studentProfile.email}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Date of Birth: </Text>
          {formatDate(studentProfile.dateOfBirth)}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Gender: </Text>
          {studentProfile.selectedGender}
        </Text>
      </View>
    </SafeAreaView>
  );
};

Profile.propTypes = {
  studentId: PropTypes.string.isRequired,
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

export default Profile;
