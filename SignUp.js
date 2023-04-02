import { View, Text,TextInput,Button,Image, SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
// import MyCheckBox from './MyCheckBox'
import { Checkbox } from 'react-native-paper'
import {useState} from 'react'


// const FormScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

 
//     setUsername('');
//     setPassword('');
//   };
// }




export default function SignUp({navigation}) {
 
    const [ checked, setChecked] = React.useState(false);
    const [email,setEmail] =React.useState('Email');
    const handleClearTextEmail=()=>{
      setEmail('');

    }

    const [name,setName] =React.useState('Name');
    const handleClearTextName=()=>{
      setName('');

    }

    const [password,setPassword] =React.useState('Password');
    const handleClearTextPassword=()=>{
      setPassword('');

    }

    const [confirm,setConfirm] =React.useState('Confirm Password');
    const handleClearTextConfirm=()=>{
      setConfirm('');

    }
    // const handleFormSubmit = () => {
    //   const databaseRef = firebase.database().ref('user');
    //   const newUserRef = databaseRef.push();
    //   newUserRef.set({
    //     name,
    //     password,
    //   });}
    
  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:15}}>Email</Text>
      <TextInput 

      style={{backgroundColor:'white',height:55,width:390,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,padding:10,fontSize:15,marginLeft:10,marginTop:10,color:'grey'}}
      value={email} 
      onChangeText={setEmail} 
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
      onChangeText={setPassword} 
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
      <TouchableOpacity style={{backgroundColor:'salmon',padding:20,marginLeft:20,marginRight:20,borderBottomStartRadius:10,borderBottomEndRadius:10,borderTopEndRadius:10,borderTopStartRadius:10}} >
        <Text style={{textAlign:'center'}}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingTop:100,marginLeft:90}}>
        <Text>Already on Foodie Moodie?Sign In</Text>
      </TouchableOpacity>


             
    </View>
  )
}