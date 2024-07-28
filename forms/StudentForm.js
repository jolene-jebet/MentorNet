import React, { useState} from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Image, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { studentOps } from '../components/database';



const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [errors, setErrors] = useState({});

  

  const validate = () => {
    let valid = true;
    let errors = {};
  
    if (!firstName) {
      valid = false;
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      valid = false;
      errors.lastName = 'Last Name is required';
    }
    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }
    if (!selectedClass) {
      valid = false;
      errors.selectedClass = 'Class is required';
    }
    if (!dateOfBirth) {
      valid = false;
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!selectedGender) {
      valid = false;
      errors.selectedGender = 'Gender is required';
    }
  
    setErrors(errors);
    return valid;
  };
  
  const handleSubmit = async () => {
    if (validate()) {
      try {
        const newStudentId = await studentOps.insert(firstName, lastName, email, selectedClass, dateOfBirth, selectedGender);
        Alert.alert('Success', `New student added with ID: ${newStudentId}`);
        // Clear form after successful submission
        setFirstName(''); 
        setLastName('');
        setEmail('');
        setSelectedClass('');
        setDateOfBirth('');
        setSelectedGender('');
      } catch (error) {
        Alert.alert('Error', 'Failed to add student: ' + error.message);
      }
    }
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Icon name="arrow-left" type="font-awesome" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Student Registration</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/user.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
            {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Class</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedClass}
                onValueChange={(itemValue) => setSelectedClass(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Class" value="" />
                <Picker.Item label="Class 1" value="Class 1" />
                <Picker.Item label="Class 2" value="Class 2" />
              </Picker>
            </View>
            {errors.selectedClass && <Text style={styles.errorText}>{errors.selectedClass}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
            {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
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
            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
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
    </SafeAreaView>
    </ScrollView>
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

export default StudentForm;
