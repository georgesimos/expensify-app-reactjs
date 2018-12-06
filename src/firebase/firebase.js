import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // Convert The object to an array using once
// // database.ref('expenses').once('value')
// //     .then( (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });


// // // Push an object
// // database.ref('expenses').push({
// //     description: 'Ice Cream',
// //     note: 'Evga',
// //     amount: 24,
// //     createdAt: 25
// // });


// // // Create or Set
// // database.ref().set({
// //     name: 'George Simos',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Pallini',
// //         country: 'Greece'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((error) => {
// //     console.log('this failed.', error);
// // });

// // // Updata
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(() => {
// //     console.log('Data is updated');
// // }).catch((error) => {
// //     console.log('this failed.', error);
// // });

// // Delete
// // database.ref('isSingle').set(null)
// // .then(() => {
// //     console.log('Remove succeeded.');
// // }).catch((error) => {
// //     console.log('Remove failed : ', error.message);
// // });

// // database.ref().remove()
// // .then(() => {
// //     console.log('Remove succeeded.');
// // }).catch((error) => {
// //     console.log('Remove failed : ', error.message);
// // })

// // Fetch Data
// // database.ref().once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch(error => console.log('error on fetching,', error));

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // })

// // Fetch data with subscribe
// // const onChangeValue = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // // Unsubscribe
// // setTimeout(() => {
// //     database.ref().off('value',onChangeValue);
// // }, 3500);
