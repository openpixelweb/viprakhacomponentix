const { getEnvValue } = require('./env');

module.exports.secret = {
  port: getEnvValue('PORT'),
  env: getEnvValue('NODE_ENV'),
  db_url: getEnvValue('MONGO_URI', ['MONGODB_URL']),
  token_secret: getEnvValue('TOKEN_SECRET', ['JWT_SECRET']),
  jwt_secret_for_verify: getEnvValue('JWT_SECRET_FOR_VERIFY'),
  bootstrap_admin_secret: getEnvValue('BOOTSTRAP_ADMIN_SECRET'),
  google_client_id: getEnvValue('GOOGLE_CLIENT_ID'),
  email_service: getEnvValue('SERVICE', ['EMAIL_SERVICE']),
  email_user: getEnvValue('EMAIL_USER'),
  email_pass: getEnvValue('EMAIL_PASS'),
  email_host: getEnvValue('HOST', ['EMAIL_HOST']),
  email_port: getEnvValue('EMAIL_PORT'),

  cloudinary_name: getEnvValue('CLOUDINARY_NAME', ['CLOUDINARY_CLOUD_NAME']),
  cloudinary_api_key: getEnvValue('CLOUDINARY_API_KEY'),
  cloudinary_api_secret: getEnvValue('CLOUDINARY_API_SECRET'),
  cloudinary_upload_preset: getEnvValue('CLOUDINARY_UPLOAD_PRESET'),

  stripe_key: getEnvValue('STRIPE_KEY', ['STRIPE_SECRET']),
  razorpay_key_id: getEnvValue('RAZORPAY_KEY_ID'),
  razorpay_key_secret: getEnvValue('RAZORPAY_KEY_SECRET'),
  razorpay_webhook_secret: getEnvValue('RAZORPAY_WEBHOOK_SECRET'),
  client_url: getEnvValue('STORE_URL', ['CLIENT_URL']),
  admin_url: getEnvValue('ADMIN_URL'),
  cookie_domain: getEnvValue('COOKIE_DOMAIN'),
  gcs_bucket_name: getEnvValue('GCS_BUCKET_NAME'),
  gcs_public_base_url: getEnvValue('GCS_PUBLIC_BASE_URL'),
  bcrypt_salt_rounds: getEnvValue('BCRYPT_SALT_ROUNDS'),
};
