

import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useRouter } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import { routeToScreen } from "expo-router/build/useScreens";

import SigninIcon from "../../assets/icons/signin";
import { useState } from "react";


// import { auth } from "@/components/firebase.";



  const  Login= () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAccout, setIsAccount] = useState(false) 
  const router = useRouter();
const [hasAcc , setAcc] = useState(-1)


// const handleLogIn=() =>{
//   auth.signInWithEmailAndPassword(email , password )
//   .then(( usercretenteial )=>{  const user = usercretenteial.user
//     console.log("login with",user.email)
//   }) .catch(error => alert(error.message))
// }
      
const [users, setUsers] = useState([]);

// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const data = await getAllUsers(); // Call the API function
//       setUsers(data); // Update state with the fetched users
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false); // Stop the loading indicator
//     }
//   };

//   fetchUsers();
// }, []);

const [newAcc , setNewAcc] = useState({})

// useEffect(()=>{
//  const unsuncribe = auth.onAuthStateChanged((user) =>{
//   if(user){
//     router.push("/(tabs)") 
//   }
// })
// return unsuncribe;
// },[])


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

const [newAcc , setNewAcc] = useState({})
function seeingAccount(){
  
  for(const persion in users){
   
 
  
  }
}
  return (
    <KeyboardAvoidingView style={styles.container} 
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
           
 <View style={{marginTop:150, width:"100%", padding:20}} >


      <View style={{marginLeft:"auto",marginRight:"auto"}}>
           <SigninIcon width={200} height={220}>
  
      </SigninIcon>
      </View>
   

      <Text style={{fontWeight:"600", fontSize:30}}>Login</Text>
  

        <View style={{marginTop:20}}>
             <Text style={{fontSize:16}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="@email.com"
        
        placeholderTextColor={"#56666B"}
        value={email}
        onChangeText={setEmail}
      />
        </View>

     
     

      
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
       </TouchableWithoutFeedback>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={() => {
       

            router.dismissTo("/(tabs)")

       
      }}  style={{ display:"flex", alignItems:"center",justifyContent:"center" ,flexDirection:"row",
                backgroundColor:"#fa5a2a",padding:14, borderRadius:10, marginTop:23}}>
              
                 <Text style={{color:"white",marginLeft:20,alignItems:"center", fontWeight:"600"}}>Login</Text>
            </TouchableOpacity > 

            <TouchableOpacity onPress={() => router.push("/SignUp")}  style={{ display:"flex", alignItems:"center",justifyContent:"center" ,flexDirection:"row",
                backgroundColor:"#FCDAC7",padding:14, borderRadius:10, marginTop:20}}>
              
                 <Text style={{color:"#031B29",marginLeft:20,alignItems:"center", fontWeight:"600"}}>you do not have an account .. Create</Text>
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

export default  Login;

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}




