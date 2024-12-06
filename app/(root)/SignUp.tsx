import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useRouter } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import { routeToScreen } from "expo-router/build/useScreens";

import SigninIcon from "../../assets/icons/signin";
import { getAllUsers } from "@/components/userServices";


// import { auth } from "@/components/firebase.";


  export default function SignUp (){
    const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // const handleSignup=() =>{
  //   auth.createUserWithEmailAndPassword(email , password )
  //   .then(( usercretenteial )=>{  const user = usercretenteial.user
  //     console.log("register w ith",user.email)
  //   }) .catch(error => alert(error.message))
  // }

// function saveUser(){
// const User = {firstName,email ,password}
//    console.log(User)
//   CreateUsers(User)
//   const list = listUsers;
//   console.log(list)
  
// }
const [users, setUsers] = useState([]);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers(); // Call the API function
      setUsers(data); // Update state with the fetched users
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  fetchUsers();
}, []);

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
        value={firstName}
        onChangeText={setName}
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
       
        router.dismissTo("/(tabs)")
      
        
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
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}