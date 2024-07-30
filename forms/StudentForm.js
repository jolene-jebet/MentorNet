import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import initializeDatabase from '../components/database';

const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  
  const [errors, setErrors] = useState({});
  const [formattedDate, setFormattedDate] = useState(dateOfBirth);
  const [db, setDb] = useState(null);

  const navigation = useNavigation();
  
  useEffect(() => {
    const initDatabase = async () => {
      try {
        const { studentOps } = await initializeDatabase();
        setDb(studentOps);
      } catch (error) {
        console.error('Error initializing database in component:', error);
      }
    };

    initDatabase();
  }, []);

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
    if (!studentId) {
      valid = false;
      errors.studentId = 'Student ID is required';
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
      if (db) {
        try {
          const newStudentId = await db.insert(email, studentId, firstName, lastName, selectedClass, dateOfBirth, selectedGender);
          Alert.alert('Success', `New student added with ID: ${newStudentId}`);
          // Clear form after successful submission
          setFirstName('');
          setLastName('');
          setStudentId('');
          setEmail('');
          setSelectedClass('');
          setDateOfBirth('');
          setSelectedGender('');
        } catch (error) {
          Alert.alert('Error', 'Failed to add student: ' + error);
        }
      } else {
        Alert.alert('Error', 'Database is not initialized.');
      }
    }
  };

  const showDatepicker = () => {
    setShowCalendar(true);
  };

  const onDateChange = (selectedDate) => {
    setShowCalendar(false);
    setDateOfBirth(selectedDate.toISOString());
    setFormattedDate(selectedDate.toLocaleDateString());
  };

  const onCancel = () => {
    setShowCalendar(false);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Student Registration</Text>
          <TouchableOpacity>
            {/* <Image source={require('../assets/images/user.png')} style={styles.icon} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
                placeholderTextColor="black"
              />
              <Icon name="person" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
                placeholderTextColor="black"
              />
              <Icon name="person-outline" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="email-address"
              />
              <Icon name="email" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Student ID</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={studentId}
                onChangeText={setStudentId}
                placeholder="Student ID"
                placeholderTextColor="black"
              />
              <Icon name="badge" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.studentId && <Text style={styles.errorText}>{errors.studentId}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Class</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedClass}
                onValueChange={setSelectedClass}
                style={styles.picker}
                mode="dropdown"
              >
                <Picker.Item label="Select Class" value="" />
                <Picker.Item label="Class 6" value="Class 6" />
                <Picker.Item label="Class 7" value="Class 7" />
                <Picker.Item label="Class 8" value="Class 8" />
              </Picker>
              <Icon name="class" size={20} color="black" style={styles.iconInsidePicker} />
            </View>
            {errors.selectedClass && <Text style={styles.errorText}>{errors.selectedClass}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedGender}
                onValueChange={setSelectedGender}
                style={styles.picker}
                mode="dropdown"
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
              <Icon name="wc" size={20} color="black" style={styles.iconInsidePicker} />
            </View>
            {errors.selectedGender && <Text style={styles.errorText}>{errors.selectedGender}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.inputWithIcon}>
              <Text style={styles.datePickerText}>{formattedDate}</Text>
              <Icon name="calendar-today" size={20} color="black" style={styles.iconInsideInput} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={showCalendar}
              mode="date"
              onConfirm={onDateChange}
              onCancel={onCancel}
            />
            {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
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
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B8A8A2',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  iconInsidePicker: {
    marginLeft: 10,
  },
  datePickerText: {
    color: 'black',
    flex: 1,
    height: 40,
    paddingVertical: 10,
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
