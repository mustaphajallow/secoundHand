import React, { useRef, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useRouter } from "expo-router";
import SigninIcon from "@/assets/icons/signin";
import { SafeAreaView } from "react-native-safe-area-context";
import { routeToScreen } from "expo-router/build/useScreens";


  export default function SignUp (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


      

  return (
    <KeyboardAvoidingView style={styles.container}  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
           
 <View style={{marginTop:10, width:"100%", padding:20}}>


      <View style={{marginLeft:"auto",marginRight:"auto"}}>
           <SigninIcon width={200} height={220}>   </SigninIcon>
  
   
      </View>
   

      <Text style={{fontWeight:"600", fontSize:30}}>SignUp</Text>
      <View style={{marginTop:20}}>
             <Text style={{fontSize:16}}>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="jon doe"
        
        placeholderTextColor={"#56666B"}
        value={email}
        onChangeText={setEmail}
      />
        </View>


        <View style={{marginTop:12}}>
             <Text style={{fontSize:16}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="@email.com"
        
        placeholderTextColor={"#56666B"}
        value={email}
        onChangeText={setEmail}
      />
        </View>

     
     

      
    
        <View style={{marginTop:24}}>
        <Text style={{fontSize:16}}>Password</Text>
           <TextInput
        style={styles.input}
        placeholder=" . . ."
        placeholderTextColor={"#56666B"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
       </View>
   
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={() =>{
        
router.push("/(tabs)")

      } }  style={{ display:"flex", alignItems:"center",justifyContent:"center" ,flexDirection:"row",
                backgroundColor:"#fa5a2a",padding:14, borderRadius:10, marginTop:23}}>
              
                 <Text style={{color:"white",marginLeft:20,alignItems:"center", fontWeight:"600"}}>SignUp</Text>
            </TouchableOpacity > 

           
     
     
      </View> 
      
      
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {  justifyContent: 'center',height:"100%",width:"100%", // Adjust based on your layout
    alignItems: 'center', backgroundColor:"#FBF9ED"},
  input: { borderWidth: 0, marginVertical: 8, padding: 8, borderRadius: 4,color:"black", borderBottomWidth:1 },
  error: { color: "red", marginVertical: 4 },
});
