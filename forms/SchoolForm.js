import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {schoolOps} from '../components/database';
const SchoolForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [missionValues, setMissionValues] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!schoolName) {
      valid = false;
      errors.schoolName = 'School Name is required';
    }

    if (!address) {
      valid = false;
      errors.address = 'Address is required';
    }

    if (!telephone) {
      valid = false;
      errors.telephone = 'Telephone is required';
    }

    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }

    setErrors(errors);
    return valid;
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setSchoolLogo(response.assets[0].uri); 
      }
    });
  };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        const newSchoolId = await schoolOps.insert(schoolName, schoolLogo, address, telephone, email, missionValues);
        Alert.alert('Success', `New school added with ID: ${newSchoolId}`);
        // Clear form fields
        setSchoolName('');
        setSchoolLogo(null);
        setAddress('');
        setTelephone('');
        setEmail('');
        setMissionValues('');
      } catch (error) {
        Alert.alert('Error', 'Failed to add school: ' + error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/sch.png')} style={styles.icon} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Welcome!</Text>
          <Text style={styles.headerSubText}>Register your school with us today</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>School Name:</Text>
          <TextInput
            style={styles.input}
            value={schoolName}
            onChangeText={setSchoolName}
            placeholder="Enter School Name"
          />
          {errors.schoolName && <Text style={styles.errorText}>{errors.schoolName}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>School Logo:</Text>
          <TouchableOpacity onPress={handleSelectImage} style={styles.imagePicker}>
            {schoolLogo ? (
              <Image source={{ uri: schoolLogo }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>Select Image</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter Address"
          />
          {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telephone:</Text>
          <TextInput
            style={styles.input}
            value={telephone}
            onChangeText={setTelephone}
            placeholder="Enter Telephone"
            keyboardType="phone-pad"
          />
          {errors.telephone && <Text style={styles.errorText}>{errors.telephone}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mission and Values:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={missionValues}
            onChangeText={setMissionValues}
            multiline={true}
            placeholder="Enter Mission and Values"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  headerSubText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#403432',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#B8A8A2',
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 80,
  },
  imagePicker: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8A8A2',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imagePlaceholder: {
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#8E806A',
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#A35638',
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default SchoolForm;
