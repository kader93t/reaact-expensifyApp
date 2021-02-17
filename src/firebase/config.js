import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const database = firebase.default.database();
const googleAuthProvider = new firebase.default.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.default.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.default.auth.GithubAuthProvider();
export {
  firebase,
  database,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
};

// database.ref('aboutMe').set({
//   name: "BENANANE Abdelkader",
//   age: 27,
//   isSingle: false,
//   location: {
//     city: "Frenda",
//     country: "Algeria"
//   }
// });
// database.ref("Attributes").set({
//   heigth: 1.81,
//   weight: 59
// });

//

// database.ref('age').remove()
//   .then(() => {
//     console.log("data deleted succefully");
//   })
//   .catch((e) => {
//     console.log("Error : ",e.message);
//   })

// database.ref("aboutMe").update({
//   isSingle: true,
//   "location/city": "Frenda-Tiaret"
// }).then(() => {
//   console.log("updated");
// }).catch((error) => {
//   console.log("Error updating : ", error.message);
// });

// database.ref("aboutMe").once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((error) => {
//     console.log("Error fetching data : ", error.message);
//   });

// database.ref("aboutMe").on("value", (snapshot) => {
//   console.log(snapshot.val());
// });

// const expenses = {
//       description: "hello1",
//       note: "yesterday1",
//       amount: 2.15
// }

// database.ref("expenses").push(expenses);

// database.ref("expenses")
//   .on("value", (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(expense => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       })
//     });
//     console.log(expenses);
// });
