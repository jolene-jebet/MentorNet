import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { schoolOps } from '../components/database';

const SchoolProfile = ({ schoolId }) => {
  const [schoolProfile, setSchoolProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchoolProfile = async () => {
      try {
        const profile = await schoolOps.getByEmail(email);
        setSchoolProfile(profile);
      } catch (error) {
        console.error('Error fetching school profile:', error);
        setError('Failed to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

fetchSchoolProfile();
  }, [schoolId]);

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

  if (!schoolProfile) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>School not found.</Text>
      </SafeAreaView>
    );
  }

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={schoolProfile.profileImage ? { uri: schoolProfile.profileImage } : require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>{`${schoolProfile.schoolName}`}</Text>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Address: </Text>
          {schoolProfile.address}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Email: </Text>
          {schoolProfile.email}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Telephone: </Text>
          {(schoolProfile.telephone)}
        </Text>
        
      </View>
    </SafeAreaView>
  );
};

SchoolProfile.propTypes = {
  schoolId: PropTypes.string.isRequired,
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

export default SchoolProfile;