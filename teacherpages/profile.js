import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { teacherOps } from '../components/database';

const TeacherProfile = ({ teacherId }) => {
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const profile = await teacherOps.getById(teacherId);
        setTeacherProfile(profile);
      } catch (error) {
        console.error('Error fetching teacher profile:', error);
        setError('Failed to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

fetchTeacherProfile();
  }, [teacherId]);

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

  if (!teacherProfile) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Teacher not found.</Text>
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
          source={teacherProfile.profileImage ? { uri: teacherProfile.profileImage } : require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>{`${teacherProfile.name} `}</Text>
  
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Teacher ID: </Text>
          {teacherProfile.teacherId}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Email: </Text>
          {teacherProfile.email}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Date of Birth: </Text>
          {formatDate(teacherProfile.dateOfBirth)}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Gender: </Text>
          {teacherProfile.selectedGender}
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