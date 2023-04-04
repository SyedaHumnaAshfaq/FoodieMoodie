import { View, Text,TextInput,Button,Image, SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { Checkbox } from 'react-native-paper'
import {useState} from 'react'
import firebase from 'firebase/app';
import { firebaseConfig } from './FirebaseConfig'; 
import {getDatabase,ref,set} from 'firebase/database'
import {initializeApp} from 'firebase/app'

import {auth} from './FirebaseConfig';
import {createUserWithEmailAndPassword,signInAnonymously,signInWithEmailAndPassword,onAuthStateChanged}from 'firebase/auth'




const app = initializeApp(firebaseConfig);

export default function SignUp({navigation}) {
  const db = getDatabase();
const tableRef = ref(db,'user');

  const writeDatabase=(email, password)=>{
    
    
    set(tableRef, {
      username : email,
      password : password
  
  
    }).catch((error) => {
      console.log(error);
      
    });
    // console.log('tableRef', email,password);
    }
    
  const handleSignUp =async()=>{
    await createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
    }).catch((error)=>{
      console.log(error);

    })

  }
  
  const [ checked, setChecked] = React.useState(false);
    const [email,setEmail] =React.useState('Email');
    const handleClearTextEmail=()=>{
      setEmail('');

    }
    const handleEmailChange=(inputText)=>{
      setEmail(inputText);
    }

    const [name,setName] =React.useState('Name');
    const handleClearTextName=()=>{
      setName('');

    }

    const [password,setPassword] =React.useState('Password');
    const handleClearTextPassword=()=>{
      setPassword('');

    }
    const handlePasswordChange=(inputText)=>{
      setPassword(inputText);
    }

    const [confirm,setConfirm] =React.useState('Confirm Password');
    const handleClearTextConfirm=()=>{
      setConfirm('');

    }
    
    // useEffect(()=>{
    //   writeDatabase;
    //   console.log(email);
    //   console.log(password);
    //  });
    
  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:15}}>Email</Text>
      <TextInput 

      style={{backgroundColor:'white',height:55,width:390,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,padding:10,fontSize:15,marginLeft:10,marginTop:10,color:'grey'}}
      value={email} 
      onChangeText={handleEmailChange} 
      onFocus={handleClearTextEmail}>

      </TextInput>
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:15}}>Name</Text>
      <TextInput 

      style={{backgroundColor:'white',height:55,width:390,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,padding:10,fontSize:15,marginLeft:10,marginTop:10,color:'grey'}}
      value={name} 
      onChangeText={setName} 
      onFocus={handleClearTextName}>

      </TextInput>
      
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:15}}>Password</Text>
      <TextInput 

      style={{backgroundColor:'white',height:55,width:390,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,padding:10,fontSize:15,marginLeft:10,marginTop:10,color:'grey'}}
      value={password} 
      onChangeText={handlePasswordChange} 
      onFocus={handleClearTextPassword}>

      </TextInput>
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:15}}>Confirm Password</Text>
      <TextInput 

      style={{backgroundColor:'white',height:55,width:390,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,padding:10,fontSize:15,marginLeft:10,marginTop:10,color:'grey'}}
      value={confirm} 
      onChangeText={setConfirm} 
      onFocus={handleClearTextConfirm}>

</TextInput>
     <Text></Text>
      <View style={{flexDirection:'row',marginTop:10}}>
      <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
             }}
             color='black' />
      <Text style={{marginTop:5}}>I accept the Terms of Use and Privacy Policy </Text>
      
      </View>
      <Text></Text>
      {/* // in case of writedatabase call writedatabase in onpress  */}
      <TouchableOpacity style={{backgroundColor:'salmon',padding:20,marginLeft:20,marginRight:20,borderBottomStartRadius:10,borderBottomEndRadius:10,borderTopEndRadius:10,borderTopStartRadius:10}} onPress={()=>{handleSignUp()}}  > 
        <Text style={{textAlign:'center'}}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingTop:100,marginLeft:90}}>
        <Text>Already on Foodie Moodie?Sign In</Text>
      </TouchableOpacity>


             
    </View>
  )
}