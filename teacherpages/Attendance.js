import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const attendanceData = [
  { id: '1', name: 'Nelly W', attendance: ['-', '-', '-', '-'] },
  { id: '2', name: 'Jolene J', attendance: ['-', '-', '-', '-'] },
  { id: '3', name: 'Njiru A', attendance: ['-', '-', '-', '-'] },
  { id: '4', name: 'Sandra K', attendance: ['-', '-', '-', '-'] },
  { id: '5', name: 'Mercy M', attendance: ['-', '-', '-', '-'] },
  { id: '6', name: 'Ryan M', attendance: ['-', '-', '-', '-'] },
  { id: '7', name: 'Vickie M', attendance: ['-', '-', '-', '-'] },
  { id: '8', name: 'Ernest E', attendance: ['-', '-', '-', '-'] },
  { id: '9', name: 'Benny B', attendance: ['-', '-', '-', '-'] },
];

const Attendance = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      {item.attendance.map((att, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.cell, att === 'P' ? styles.present : att === 'A' ? styles.absent : null]}
          onPress={() => markAttendance(item.id, index)}
        >
          <Text style={styles.cellText}>{att}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const markAttendance = (studentId, index) => {
    // Here you can update the attendance data in your state
    // For now, we'll just log the action
    console.log(`Mark attendance for student ${studentId} on day ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>Mathematics</Text>
      <Text style={styles.className}>7 West</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>1</Text>
        <Text style={styles.headerText}>2</Text>
        <Text style={styles.headerText}>3</Text>
        <Text style={styles.headerText}>4</Text>
      </View>
      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Adjust the background color to match your design
    padding: 16,
  },
  subject: {
    color: '#ccc', 
    fontSize: 20,
    textAlign: 'center',
  },
  className: {
    color: '#ccc', 
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5a5353', // Adjust the background color to match your design
    padding: 8,
    borderRadius: 8,
  },
  headerText: {
    color: '#fff', 
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5a5353', 
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  name: {
    color: '#fff', // Adjust the text color to match your design
    fontSize: 16,
    flex: 2,
  },
  cell: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  cellText: {
    color: '#fff', 
  present: {
    backgroundColor: 'green',
  },
  absent: {
    backgroundColor: 'red',
  }
}});

export default Attendance;