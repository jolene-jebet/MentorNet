// 

//new things 

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import initializeDatabase from '../components/database'; // Adjust the path accordingly

const SchoolForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLogo, setSchoolLogo] = useState("logo");
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [missionValues, setMissionValues] = useState('');
  const [errors, setErrors] = useState({});
  const [db, setDb] = useState(null);

  const initDatabase = async () => {
    try {
      const { schoolOps } = await initializeDatabase();
      setDb(schoolOps);
    } catch (error) {
      console.error('Error initializing database in component:', error);
    }
  };

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

    if (!password) {
      valid = false;
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      if (!db) {
        await initDatabase();
      }
      if (db) {
        try {
          const newSchoolId = await db.insert(
            schoolName,
            email,
            password,
            schoolLogo,
            address,
            telephone,
            missionValues
          );
          Alert.alert('Success', `New school added with ID: ${newSchoolId}`);
          setSchoolName('');
          setSchoolLogo(null);
          setAddress('');
          setTelephone('');
          setEmail('');
          setPassword('');
          setMissionValues('');
        } catch (error) {
          Alert.alert('Error', 'Failed to add school: ' + error.message);
        }
      } else {
        Alert.alert('Error', 'Database is not initialized.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>School Registration</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>School Name:</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={schoolName}
                onChangeText={setSchoolName}
                placeholder="Enter School Name"
                placeholderTextColor="black"
              />
              <Icon name="school" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.schoolName && <Text style={styles.errorText}>{errors.schoolName}</Text>}
          </View>

          {/* Uncomment this block if you want to enable image selection */}
          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>School Logo:</Text>
            <TouchableOpacity onPress={handleSelectImage} style={styles.imagePicker}>
              {schoolLogo ? (
                <Image source={{ uri: schoolLogo }} style={styles.image} />
              ) : (
                <Text style={styles.imagePlaceholder}>Select Image</Text>
              )}
            </TouchableOpacity>
          </View> */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address:</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter Address"
                placeholderTextColor="black"
              />
              <Icon name="location-on" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telephone:</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={telephone}
                onChangeText={setTelephone}
                placeholder="Enter Telephone"
                placeholderTextColor="black"
                keyboardType="phone-pad"
              />
              <Icon name="phone" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.telephone && <Text style={styles.errorText}>{errors.telephone}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
                placeholderTextColor="black"
                keyboardType="email-address"
              />
              <Icon name="email" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                placeholderTextColor="black"
                secureTextEntry={true}
              />
              <Icon name="lock" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mission and Values:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={missionValues}
              onChangeText={setMissionValues}
              multiline={true}
              placeholder="Enter Mission and Values"
              placeholderTextColor="black"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    width: 24,
    height: 24,
  },
  form: {
    backgroundColor: '#4E4037',
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
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B8A8A2',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    paddingVertical: 10,
  },
  iconInsideInput: {
    marginLeft: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    color: 'black',
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
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default SchoolForm;
