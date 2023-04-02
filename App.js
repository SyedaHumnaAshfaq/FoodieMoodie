import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//importing screens
import File1 from './File1';
import Login from './Login';
import firstScreen from './firstScreen';
import SignUp from './SignUp';

//import commands for firebase
import { firebaseConfig } from './FirebaseConfig'; 
import { initializeApp } from "firebase/app"; 
import { getDatabase,ref, onValue } from "firebase/database";




// try
// {
    
//     const auth = getAuth();
// } catch(error) {
//     console.log('Error:', error)
// }
// const auth = getAuth();
// var email = 'ayesha@gmail.com';
// var password = '12546';
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });




const app = initializeApp(firebaseConfig); //initialise firebase
// const analytics = getAnalytics(app); //initialise firebase

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();



const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    //const db = getDatabase();
    const userinfo = ref(database, 'user');
    onValue(userinfo, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
     // updateStarCount(postElement, data);
    });
   });
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name= 'SignUp' component={SignUp}/>
      <Stack.Screen name='firstScreen' component={firstScreen} options={{headerShown: false}}/>
      <Stack.Screen name='abc' component={File1}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//git add.
//git commit -m "message"
//git push -u origin main