import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import {TextInput,Button,Image, SafeAreaView } from 'react-native';
import {useState} from 'react'
// import firstScreen from './firstScreen';

import { mainViewstyle,view1style,view2style,view3style,view4style,view5style,view6style } from './Style';
import {auth} from './FirebaseConfig';
import {createUserWithEmailAndPassword,signInAnonymously,signInWithEmailAndPassword,onAuthStateChanged, reauthenticateWithCredential}from 'firebase/auth'
import {Alert} from 'react-native'



export default function Login({navigation}) {
  const [username,setUser] = useState('');
  const [password,setPass] = useState('');
  const handleUsernameChange=(inputText)=>{
    setUser(inputText);
  }
  const handlePasswordChange=(inputText)=>{
    setPass(inputText);
  }

  
  const handleSignIn =async()=>{
    await signInWithEmailAndPassword(auth,username,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      // console.log(user);
      navigation.navigate('firstScreen');
    }).catch((error)=>{
      Alert.alert('Error','Enter correct Username and Password');

    })

  }
  const signInGuest = async()=>{
    await signInAnonymously(auth).then((userCredential=>{
      Alert.alert('Alert','You are signing in as Guest User');
      navigation.navigate('firstScreen');
    }))
  }
  
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
    <View style={mainViewstyle.container}>
      <View style={{alignItems:'flex-start',marginTop:100}}><Text style={{textAlign:'center',fontSize:25,marginLeft:15,fontWeight:'bold'}}>Welcome</Text></View>
      <View style={view1style.view1}>
      <Image source={require('./assets/logo.png')} style={{width:380,height:100,alignItems:'center',marginTop:20,resizeMode:'stretch'}} />
      {/* <Text style={{fontSize:50,fontFamily:''}}>FOODIE MOODIE</Text> */}
      </View>
      <View style={view2style.view2}>
        <Text style={{fontSize:21,paddingHorizontal:150}}>Username</Text>
        <TextInput style={{    
          height: 40,
          width:380,
          margin: 12,
          borderWidth: 1,
          paddingHorizontal:10,
          paddingVertical:0,
          }}
          value={username}
          onChangeText={handleUsernameChange}></TextInput>
        <Text style={{fontSize:21,paddingHorizontal:150}}>Password</Text>
        <TextInput style={{    
          height: 40,
          width:380,
          margin: 12,
          borderWidth: 1,
          paddingHorizontal:10,
          }}
          value={password}
          onChangeText={handlePasswordChange}></TextInput>
      
      </View>
      <View style={view3style.view3}>
        <Button
        title="     LOG IN      "
        onPress={handleSignIn}
        color='black'>

        </Button>

        <TouchableOpacity style={{textAlign:'center',marginTop:150}} onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{fontSize:15}}>New on Foodie Moodie?Sign Up</Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={{textAlign:'center',marginTop:50}} onPress={signInGuest}>
            <Text style={{fontSize:15}}>Guest User</Text>
            
        </TouchableOpacity>
        

      </View>
    </View>
    </ScrollView>

  )
}