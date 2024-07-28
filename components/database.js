import SQLite from 'react-native-sqlite-storage';

console.log('SQLite object:', SQLite);

enablePromise(true);

// Open or create the database
const db = SQLite.openDatabase(
  {
    name: 'SchoolDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened successfully'),
  error => console.log('Error opening database:', error)
);

// Initialize the database schema
const initDatabase = () => {
  db.transaction(tx => {
    // Create Students table
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        selectedClass TEXT NOT NULL,
        dateOfBirth TEXT NOT NULL,
        selectedGender TEXT NOT NULL
      )`);

    // Create Teachers table
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        teacherName TEXT NOT NULL,
        teacherID TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        telephone TEXT,
        dateOfBirth TEXT NOT NULL,
        selectedGender TEXT NOT NULL
      )`);

    // Create Schools table
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Schools (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        schoolName TEXT NOT NULL,
        schoolLogo TEXT,
        address TEXT NOT NULL,
        telephone TEXT,
        email TEXT NOT NULL,
        missionValues TEXT
      )`);
  }, error => console.log('Transaction error:', error));
};

// Student operations
const studentOps = {
    insert: (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) => {
        return new Promise((resolve, reject) => {
          db.transaction(tx => {
            tx.executeSql(
              'INSERT INTO Students (firstName, lastName, email, selectedClass, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)',
              [firstName, lastName, email, selectedClass, dateOfBirth, selectedGender],
              (tx, result) => resolve(result.insertId),
              (tx, error) => reject(error)
            );
          });
        });
      },

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Students',
          [],
          (_, { rows }) => resolve(rows.raw()),
          (_, error) => reject(error)
        );
      });
    });
  },

  // ... other student operations ...
};

// Teacher operations
const teacherOps = {
  insert: (teacherName, teacherID, email, phone, dateOfBirth, selectedGender) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Teachers (teacherName, teacherID, email, telephone, dateOfBirth, selectedGender) VALUES (?, ?, ?, ?, ?, ?)',
          [teacherName, teacherID, email, phone, dateOfBirth, selectedGender],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Teachers',
          [],
          (_, { rows }) => resolve(rows.raw()),
          (_, error) => reject(error)
        );
      });
    });
  },

  // ... other teacher operations ...
};

// School operations
const schoolOps = {
  insert: (schoolName, schoolLogo, address, telephone, email, missionValues) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Schools (schoolName, schoolLogo, address, telephone, email, missionValues) VALUES (?, ?, ?, ?, ?, ?)',
          [schoolName, schoolLogo, address, ptelephone, email, missionValues],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }
};

// Initialize the database
initDatabase();

// Export the database operations
export { studentOps, teacherOps, schoolOps };
