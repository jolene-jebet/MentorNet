import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Image, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { teacherOps } from '../components/database';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TeacherForm = () => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherID, setTeacherID] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [errors, setErrors] = useState({});
  const [formattedDate, setFormattedDate] = useState(dateOfBirth);
  const [showCalendar, setShowCalendar] = useState(false);

  const navigation = useNavigation();

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!teacherName) {
      valid = false;
      errors.teacherName = 'Teacher Name is required';
    }

    if (!teacherID) {
      valid = false;
      errors.teacherID = 'Teacher ID is required';
    }

    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }

    if (!telephone) {
      valid = false;
      errors.telephone = 'Telephone is required';
    }

    if (!dateOfBirth) {
      valid = false;
      errors.dateOfBirth = 'Date of Birth is required';
    } else if (!/\d{2}-\d{2}-\d{4}/.test(dateOfBirth)) {
      valid = false;
      errors.dateOfBirth = 'Date of Birth must be in format DD-MM-YYYY';
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
        const newTeacherId = await teacherOps.insert(teacherName, teacherID, email, telephone, dateOfBirth, selectedGender);
        Alert.alert('Success', `New teacher added with ID: ${newTeacherId}`);
        // Clear form after successful submission
        setTeacherName('');
        setTeacherID('');
        setEmail('');
        setTelephone('');
        setDateOfBirth('');
        setSelectedGender('');
      } catch (error) {
        Alert.alert('Error', 'Failed to add teacher: ' + error.message);
      }
    }
  };

  const showDatepicker = () => {
    setShowCalendar(true);
  };

  const onDateChange = (selectedDate) => {
    setShowCalendar(false);
    setDateOfBirth(selectedDate.toISOString()); // Store date in ISO format for database
    setFormattedDate(selectedDate.toLocaleDateString()); // Format for display
  };

  const onCancel = () => {
    setShowCalendar(false);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Teacher Registration</Text>
          <Image source={require('../assets/images/user.png')} style={styles.icon} />
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Teacher Name</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={teacherName}
                onChangeText={setTeacherName}
                placeholder="Teacher Name"
                placeholderTextColor="black"
              />
              <Icon name="person" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.teacherName && <Text style={styles.errorText}>{errors.teacherName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Teacher ID</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={teacherID}
                onChangeText={setTeacherID}
                placeholder="Teacher ID"
                placeholderTextColor="black"
              />
              <Icon name="badge" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.teacherID && <Text style={styles.errorText}>{errors.teacherID}</Text>}
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
            <Text style={styles.label}>Telephone</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={telephone}
                onChangeText={setTelephone}
                placeholder="Telephone"
                placeholderTextColor="black"
                keyboardType="phone-pad"
              />
              <Icon name="phone" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.telephone && <Text style={styles.errorText}>{errors.telephone}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.inputWithIcon}>
              <Text style={styles.datePickerText}>{formattedDate || "Select Date"}</Text>
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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputWithIcon}>
              <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                style={styles.picker}
                mode="dropdown"
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
              <Icon name="wc" size={20} color="black" style={styles.iconInsideInput} />
            </View>
            {errors.selectedGender && <Text style={styles.errorText}>{errors.selectedGender}</Text>}
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
  datePickerText: {
    flex: 1,
    height: 40,
    color: 'black',
    paddingVertical: 10,
  },
});

export default TeacherForm;
