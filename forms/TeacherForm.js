import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
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
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity>
      <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Teacher Registration</Text>
      <TouchableOpacity>
      <Icon name="user" size={20} color="#fff" />
      </TouchableOpacity>
      </View>
    
    
        <Text style={styles.heading}>Teacher Form</Text>

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
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
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
