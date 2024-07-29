import * as SQLite from 'expo-sqlite';

const startDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('SchoolDatabase.db');

  // Initialize the database schema
  await db.execAsync(`PRAGMA foreign_keys = ON;
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
    );`);

  // Student operations
  const studentOps = {
    insert: async (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) => {
      const result = await db.runAsync('INSERT INTO Students (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)', firstName, lastName, email, selectedClass, dateOfBirth, selectedGender);
      return result.lastInsertRowId;
    },

getAll: async () => {
  const allRows = await db.getAllAsync('SELECT * FROM Students');
  return allRows;
},

getFirst: async () => {
  const firstRow = await db.getFirstAsync('SELECT * FROM Students');
  return firstRow;
},
  };

  // Teacher operations
  const teacherOps = {
    insert: async (teacherName, teacherID, email, telephone, dateOfBirth, selectedGender) => {
      const result = await db.runAsync('INSERT INTO Teachers (teacherName, teacherID, email, telephone, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)', teacherName, teacherID, email, telephone, dateOfBirth, selectedGender);
      return result.lastInsertRowId;
    },

getAll: async () => {
  const allRows = await db.getAllAsync('SELECT * FROM Teachers');
  return allRows;
},

getFirst: async () => {
  const firstRow = await db.getFirstAsync('SELECT * FROM Teachers');
  return firstRow;
},
  };

  // School operations
  const schoolOps = {
    insert: async (schoolName, schoolLogo, address, telephone, email, missionValues) => {
      const result = await db.runAsync('INSERT INTO Schools (schoolName, schoolLogo, address, telephone, email, missionValues) VALUES (?, ?, ?, ?, ?, ?)', schoolName, schoolLogo, address, telephone, email, missionValues);
      return result.lastInsertRowId;
    },

getAll: async () => {
  const allRows = await db.getAllAsync('SELECT * FROM Schools');
  return allRows;
},

getFirst: async () => {
  const firstRow = await db.getFirstAsync('SELECT * FROM Schools');
  return firstRow;
},
  };

  // Export the database operations
  return { studentOps, teacherOps, schoolOps };
};

// Call the async function
startDatabase().then(({ studentOps, teacherOps, schoolOps }) => {
  // Use the exported operations here
});