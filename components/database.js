import * as SQLite from 'expo-sqlite';

const initializeDatabase = async () => {
  try {
    const db = await SQLite.openDatabaseAsync('SchoolDatabase.db');
    
    // Initialize the database schema
    await db.execAsync(`
      PRAGMA foreign_keys = ON;
      CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL,
        password TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS Students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        selectedClass TEXT NOT NULL,
        dateOfBirth TEXT NOT NULL,
        selectedGender TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES User(id)
      );
      CREATE TABLE IF NOT EXISTS Teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        teacherName TEXT NOT NULL,
        teacherID TEXT UNIQUE NOT NULL,
        telephone TEXT,
        dateOfBirth TEXT NOT NULL,
        selectedGender TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES User(id)
      );
      CREATE TABLE IF NOT EXISTS Schools (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        schoolName TEXT NOT NULL,
        schoolLogo TEXT,
        address TEXT NOT NULL,
        telephone TEXT,
        missionValues TEXT,
        FOREIGN KEY (userId) REFERENCES User(id)
      );
    `);

    // User operations
    const userOps = {
      insert: async (email, role, password) => {
        try {
          const result = await db.runAsync(
            'INSERT INTO User (email, role, password) VALUES (?, ?, ?)',
            [email, role, password]
          );
          return result.lastInsertRowId;
        } catch (error) {
          console.error('Error inserting user:', error);
          throw error;
        }
      },

      login: async (email, password) => {
        try {
          const result = await db.getFirstAsync(
            'SELECT * FROM User WHERE email = ? AND password = ?',
            [email, password]
          );
          return result;
        } catch (error) {
          console.error('Error logging in:', error);
          throw error;
        }
      },
    };

    // School operations
    const schoolOps = {
      insert: async (schoolName, email, password, schoolLogo, address, telephone, missionValues) => {
        try {
          // Insert into User table first
          const userId = await userOps.insert(email, 'admin', password);

          // Insert into Schools table with the generated userId
          const result = await db.runAsync(
            'INSERT INTO Schools (userId, schoolName, schoolLogo, address, telephone, missionValues) VALUES (?, ?, ?, ?, ?, ?)',
            [userId, schoolName, schoolLogo, address, telephone, missionValues]
          );
          return result.lastInsertRowId;
        } catch (error) {
          console.error('Error inserting school:', error);
          throw error;
        }
      },
    };

    return { userOps, schoolOps };
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

export default initializeDatabase;
