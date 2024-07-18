import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import schoolIcon from '../assets/images/school-svgrepo-com.svg';
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
      <View style={styles.iconContainer}>
        <SvgXml xml={schoolIcon} width="50" height="50" />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Register your school with us today</Text>
      </View>

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
          style={styles.input}
          value={missionValues}
          onChangeText={setMissionValues}
          multiline={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#333',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imagePicker: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    width: '45%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SchoolForm;
