import Database from 'better-sqlite3';

interface SubscriberCount {
  count: number;
}

interface Subscriber {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

const db = new Database('blog.db');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export function addSubscriber(name: string, email: string) {
  const stmt = db.prepare('INSERT INTO subscribers (name, email) VALUES (?, ?)');
  try {
    stmt.run(name, email);
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

export function getSubscriberCount(): number {
  const stmt = db.prepare('SELECT COUNT(*) as count FROM subscribers');
  const result = stmt.get() as SubscriberCount;
  return result.count;
}

export function getAllSubscribers(): Subscriber[] {
  const stmt = db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC');
  return stmt.all() as Subscriber[];
}