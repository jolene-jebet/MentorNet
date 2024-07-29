import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { schoolOps } from '../components/database';
import { useNavigation } from '@react-navigation/native';

const SchoolForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [missionValues, setMissionValues] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

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
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>School Registration</Text>
          <Image source={require('../assets/images/sch.png')} style={styles.icon} />
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
    backgroundColor: '#B8A8A2',
  },
});

export default SchoolForm;
