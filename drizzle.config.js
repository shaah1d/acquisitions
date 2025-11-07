import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  out: './drizzle',
  driver: 'pg', // <-- this line is key
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // <-- rename from 'url'
  },
};
