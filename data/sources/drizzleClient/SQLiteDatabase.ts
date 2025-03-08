import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

const sqlLiteDb = SQLite.openDatabaseSync('db.journal-plus-plus');
const db = drizzle(sqlLiteDb);

export default db;
