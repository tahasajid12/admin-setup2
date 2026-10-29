const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const email = 'sajidtaha443@gmail.com';

admin.auth().getUserByEmail(email)
  .then(user => admin.auth().setCustomUserClaims(user.uid, { admin: true }))
  .then(() => { 
    console.log('✅ Admin claim set for ' + email); 
    process.exit(0); 
  })
  .catch(err => { 
    console.error('❌ Error:', err.message); 
    process.exit(1); 
  });
