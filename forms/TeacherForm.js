import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity ,Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';

const TeacherForm = () => {
  const [instructorName, setInstructorName] = useState('');
  const [instructorID, setInstructotrID] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleSubmit = () => {};

  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="arrow-left" type="font-awesome" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Teacher Registration</Text>
          <TouchableOpacity>
          <Image source={require('../assets/images/user.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Instructor Name</Text>
            <TextInput
              style={styles.input}
              value={instructorName}
              onChangeText={setInstructorName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Instructor ID</Text>
            <TextInput
              style={styles.input}
              value={instructorID}
              onChangeText={setInstructotrID}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telephone</Text>
            <TextInput
              style={styles.input}
              value={telephone}
              onChangeText={setTelephone}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'black', 
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop:40,
  },
  headerText: {
    fontSize: 18,
    color: 'white', 
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
    color: 'white', // White text for labels
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#B8A8A2', // Background color for inputs
    color: 'black', // Text color for inputs
    padding: 10,
    borderRadius: 5,
  },
  pickerContainer: {
    backgroundColor: '#B8A8A2', 
    borderRadius: 5,
  },
  picker: {
    height: 40,
    color: 'black', 
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
});

export default TeacherForm;
