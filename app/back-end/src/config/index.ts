export const NEST_CONFIG = () => ({
  port: process.env.PORT,
  salt: process.env.SALT,
  jwt_secret: process.env.SECRET,
  jwt_expired: process.env.EXPIRED,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
  google_clientid: process.env.GOOGLE_CLIENT_ID,
  google_secret: process.env.GOOGLE_SECRET,
  minio_url: process.env.MINIO_URL,
  minio_endpoint: process.env.MINIO_ENDPOINT,
  minio_port: process.env.MINIO_PORT,
  minio_useSSL: false,
  minio_access: process.env.MINIO_ACCESS,
  minio_secret: process.env.MINIO_SECRET,
});
