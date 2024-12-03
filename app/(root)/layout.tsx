import { Stack } from 'expo-router';



export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(root)" /> */}
      <Stack.Screen
        name="SignUp"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}









// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import { useRouter } from 'expo-router';

//  const SignUpScreen = ()=> {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
//       />
//       <Button title="Sign Up" onPress={()=>{}} />
//       {error && <Text>{error}</Text>}
//     </View>
//   );
// }


// export default SignUpScreen;