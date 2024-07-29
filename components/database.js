

import * as SQLite from 'expo-sqlite';

const initializeDatabase = async () => {
  try {
    const db = await SQLite.openDatabaseAsync('SchoolDatabase.db');

// Initialize the database schema
await db.execAsync(`
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS Students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    selectedClass TEXT NOT NULL,
    dateOfBirth TEXT NOT NULL,
    selectedGender TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS Teachers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    teacherName TEXT NOT NULL,
    teacherID TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    telephone TEXT,
    dateOfBirth TEXT NOT NULL,
    selectedGender TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS Schools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    schoolName TEXT NOT NULL,
    schoolLogo TEXT,
    address TEXT NOT NULL,
    telephone TEXT,
    email TEXT NOT NULL,
    missionValues TEXT
  );
`);

// Student operations
const studentOps = {
  insert: async (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) => {
    try {
      const result = await db.runAsync('INSERT INTO Students (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, email, selectedClass, dateOfBirth, selectedGender]);
      return result.lastInsertRowId;
    } catch (error) {
      console.error('Error inserting student:', error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const allRows = await db.getAllAsync('SELECT * FROM Students');
      return allRows;
    } catch (error) {
      console.error('Error getting all students:', error);
      throw error;
    }
  },

  getFirst: async () => {
    try {
      const firstRow = await db.getFirstAsync('SELECT * FROM Students');
      return firstRow;
    } catch (error) {
      console.error('Error getting first student:', error);
      throw error;
    }
  },
};

// Teacher operations
const teacherOps = {
  insert: async (teacherName, teacherID, email, telephone, dateOfBirth, selectedGender) => {
    try {
      const result = await db.runAsync('INSERT INTO Teachers (teacherName, teacherID, email, telephone, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)', [teacherName, teacherID, email, telephone, dateOfBirth, selectedGender]);
      return result.lastInsertRowId;
    } catch (error) {
      console.error('Error inserting teacher:', error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const allRows = await db.getAllAsync('SELECT * FROM Teachers');
      return allRows;
    } catch (error) {
      console.error('Error getting all teachers:', error);
      throw error;
    }
  },

  getFirst: async () => {
    try {
      const firstRow = await db.getFirstAsync('SELECT * FROM Teachers');
      return firstRow;
    } catch (error) {
      console.error('Error getting first teacher:', error);
      throw error;
    }
  },
};

// School operations
const schoolOps = {
  insert: async (schoolName, schoolLogo, address, telephone, email, missionValues) => {
    try {
      const result = await db.runAsync('INSERT INTO Schools (schoolName, schoolLogo, address, telephone, email, missionValues) VALUES (?, ?, ?, ?, ?, ?)', [schoolName, schoolLogo, address, telephone, email, missionValues]);
      return result.lastInsertRowId;
    } catch (error) {
      console.error('Error inserting school:', error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const allRows = await db.getAllAsync('SELECT * FROM Schools');
      return allRows;
    } catch (error) {
      console.error('Error getting all schools:', error);
      throw error;
    }
  },

  getFirst: async () => {
    try {
      const firstRow = await db.getFirstAsync('SELECT * FROM Schools');
      return firstRow;
    } catch (error) {
      console.error('Error getting first school:', error);
      throw error;
    }
  },
};

return { studentOps, teacherOps, schoolOps };
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

export default initializeDatabase;

