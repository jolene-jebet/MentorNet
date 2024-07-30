import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const courses = [
  { id: '1', name: 'Mathematics', teacher: 'Mary Olwal' },
  { id: '2', name: 'English', teacher: 'George Otieno' },
  { id: '3', name: 'Kiswahili', teacher: 'Christine Jemutai' },
  { id: '4', name: 'Science', teacher: 'Raymond Wafula' },
  { id: '5', name: 'Social Studies', teacher: 'Emily Wachira' },
  { id: '6', name: 'Religious Studies', teacher: 'Sr Jane M' },
];

const CourseWork = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} >
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.teacherName}>{item.teacher}</Text>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5a5353', 
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  courseName: {
    color: '#fff', 
    fontSize: 16,
  },
  teacherName: {
    color: '#ccc', 
    fontSize: 14,
  },
  arrow: {
    color: '#fff', 
    fontSize: 18,
  },
});

export default CourseWork;