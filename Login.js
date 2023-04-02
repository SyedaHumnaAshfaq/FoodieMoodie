import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import {TextInput,Button,Image, SafeAreaView } from 'react-native';

import { mainViewstyle,view1style,view2style,view3style,view4style,view5style,view6style } from './Style';




export default function Login({navigation}) {
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
          }}></TextInput>
        <Text style={{fontSize:21,paddingHorizontal:150}}>Password</Text>
        <TextInput style={{    
          height: 40,
          width:380,
          margin: 12,
          borderWidth: 1,
          paddingHorizontal:10,
          }}></TextInput>
      
      </View>
      <View style={view3style.view3}>
        <Button
        title="     LOG IN      "
        onPress={()=>navigation.navigate('firstScreen')}
        color='black'>

        </Button>

        <TouchableOpacity style={{textAlign:'center',marginTop:150}} onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{fontSize:15}}>New on Foodie Moodie?Sign Up</Text>
            
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>

  )
}