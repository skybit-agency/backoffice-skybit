import { MongoClient } from 'mongodb';

const uri = process.env.CONNECTION_STRING || "mongodb://localhost:27017";

// Create a MongoClient with directConnection to bypass Windows replica set discovery bug
const client = new MongoClient(uri, {
  tls: true,
  directConnection: true,
  serverSelectionTimeoutMS: 10000,
});

export class Database {
  static #instance: Database | null = null;
  private client: any;

  private constructor() {
    this.client = client;
  }

  public static getInstance(): Database {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }
  
  public getClient() {
    return this.client;
  }
}