import React, { useState } from 'react';
import { View, TextInput, Button, Text, SafeAreaView,StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

 const SignUpScreen = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
              <StatusBar barStyle="dark-content" />

         <View >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Sign Up" onPress={()=>{}} />
      {error && <Text>{error}</Text>}
    </View>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {              width:"98%",
  },
  topBar: {
    flexDirection: "row",
    //justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  brandName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign:"left",
  },
  icons: {
    flexDirection: "row",
    marginLeft:"auto",
  },
  iconSpacing: {
    marginLeft: 16,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  deliveryText: {
    marginLeft: 8,
    color: "#777",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  },
  category: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    marginBottom: 16,
  width:"30%"
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
  },
  flashSaleBanner: {
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    position:"relative",
    width:"100%",
    height:200,overflow:"hidden",
    borderRadius:20,
    


  
  },
  bannerImage: {
     width:'100%',
     height:"20%",
    borderRadius: 8,
  },
  flashSaleTextContainer: {
    
      position: 'absolute',  // This makes the overlay content sit on top of the image
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',  // Centering the overlay content
      alignItems: 'center',
  },
  flashSaleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flashSaleSubText: {
    color: "#777",
  },
  shopNowButton: {
    color: "#FF6F61",
    marginTop: 8,
  },
  flashSaleItems: {
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  item: {
    alignItems: "center",
    width: "48%",
  },
  itemImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  discountText: {
    color: "#FF6F61",
    marginTop: 8,
  },
  itemText: {
    marginTop: 4,
    textAlign: "center",
  },
  backgroundImage: {
    width:"100%",
    height:"100%",  // Ensures the image takes up the entire screen
    justifyContent: 'center',  // Centers the content
    alignItems: 'center',
    borderRadius:20
  },
  pagerView: {
    flex: 1,
    height: 200, // Adjust the height as needed
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color:"black"
  },
});
export default SignUpScreen;