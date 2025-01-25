const admin = require('firebase-admin');

// Improved error handling and path handling
try {
  const serviceAccount = require('./path/to/key.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-project-id.firebaseio.com"
  });

  console.log('Firebase Admin SDK initialized successfully!');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
  // More specific error handling based on error type could be added here
}
