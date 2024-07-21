import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';

const SchoolForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [missionValues, setMissionValues] = useState('');

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const { uri } = response.assets[0];
        setSchoolLogo(uri);
      }
    });
  };

  const handleSubmit = () => {
    // Add your submission logic here
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
          />
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
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telephone:</Text>
          <TextInput
            style={styles.input}
            value={telephone}
            onChangeText={setTelephone}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mission and Values:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={missionValues}
            onChangeText={setMissionValues}
            multiline={true}
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
    marginTop : 40,
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
    color: 'white', // Header text color
    textAlign: 'center',
  },
  headerSubText: {
    fontSize: 16,
    color: 'white', // Subheader text color
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#403432', // Form background color
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'white', // Label text color
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#B8A8A2', // Input background color
    color: 'black', // Input text color
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 80, // Adjust height for multiline text input
  },
  imagePicker: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8A8A2', // Image picker background color
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
    backgroundColor: '#8E806A', // Submit button color
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#A35638', // Cancel button color
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: 'white', // Button text color
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SchoolForm;
