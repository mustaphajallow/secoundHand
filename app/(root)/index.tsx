import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import SigninIcon from "@/assets/icons/signin";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

  export default function HomeScreen(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
const [hasAccount, SethasAccount] = useState(true)


  return (
    <>
    
            {
                false ?  <SignUp ></SignUp >: <SignIn></SignIn>
            }
           
           
   
      {/* <Button title="Login" onPress={()=> router.push("/(tabs)")}/> */}

     </>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:""},
  input: { borderWidth: 1, marginVertical: 8, padding: 8, borderRadius: 4 },
  error: { color: "red", marginVertical: 4 },
});

