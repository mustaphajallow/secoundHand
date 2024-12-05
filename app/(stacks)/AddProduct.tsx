
// app/home/product/[id].js
import { router, useLocalSearchParams } from "expo-router";
import { Button, ImageBackground, Platform, TextInput } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import Search from "@/assets/icons/Search";

import Poduct from "@/components/Product";

import LogoIcon from "@/assets/icons/LogoIcon";
import { CreateProduct, productsList } from "@/components/productServicess";
import * as ImagePicker from 'expo-image-picker';
import ImageIcon from "@/assets/icons/ImageIcon";

export default  function AddProduct () {
  const { id } = useLocalSearchParams(); // Get the product ID from the route
  const [text, onChangeText] = React.useState("Search ");
  const [number, onChangeNumber] = React.useState("");
  const [image, setImage] = useState<string | null>(null);
  const [img , setImg] = useState("")
  const [name , setName] = useState("")
  const [price , setPrice] = useState("")
  const [discount , setDiscount] = useState("")
  const [Discri , setDiscri] = useState("")

 function saveProduct(){
  const product:any = {name,price,img,discount,Discri }
  console.log(product)
  CreateProduct(product)
 

 }

 const [products , setProducts] = useState([])

 useEffect(()=>{

  const fetchProduct = async ()=>{
    try{
      const data = await productsList();
      setProducts(data);
    }catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);  // Stop the loading indicator
    }
  }
  fetchProduct();
 },[]);

 
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result:[] = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  console.log(result);
  setImg(result)

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
  }

  return (
    <SafeAreaView style={styles.container}>
              <StatusBar barStyle="dark-content" />

      <ScrollView>
      
    

        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={{ marginRight: 5, borderRadius: 100 }}>
            <LogoIcon width={25} height={25} />
          </View>

          <Text style={styles.brandName}>Add a New Product</Text>
      
        </View>
        {/* search you need */}
        <View style={{flexDirection:"column", alignItems:"center"}}>
   
            <TouchableOpacity onPress={pickImage}>

              <View>
               <ImageIcon  width={50} height={52}/>
              </View>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{  width: 200,
                 height: 200, borderRadius:20}} />}
        </View>

        {/* Flash Sale Items */}
        <View style={styles.flashSaleItems}>
          <View style={{marginTop:12, width:"100%"}}>
             <Text style={{fontSize:16}}>Product Name</Text>
            <TextInput
        style={styles.input}
        placeholder="null"
        
        placeholderTextColor={"#56666B"}
        value={name}
        onChangeText={setName}
      />
        </View>
        <View style={{flexDirection:"row" ,gap:"3.2%"}}>

        <View style={{marginTop:12, width:"48%"}}>
             <Text style={{fontSize:16}}> Price</Text>
            <TextInput
        style={styles.input}
        placeholder="$ 0.00"
        keyboardType="number-pad"
        placeholderTextColor={"#56666B"}
        value={price}
        onChangeText={setPrice}
      />
        </View>
        <View style={{marginTop:12, width:"48%"}}>
             <Text style={{fontSize:16}}>Discount %</Text>
            <TextInput
        style={styles.input}
        placeholder="0%"
        
        placeholderTextColor={"#56666B"}
        value={discount}
        onChangeText={setDiscount}
      />
        </View>
        </View>


        <View style={{marginTop:12, width:"100%"}}>
             <Text style={{fontSize:16}}>Description</Text>
            <TextInput
        style={styles.input}
        placeholder="is about"
        
        placeholderTextColor={"#56666B"}
        value={Discri}
        onChangeText={  setDiscri}
      />
        </View>
        <TouchableOpacity onPress={() =>{
        saveProduct()
      router.dismiss()
    
      
    } }  style={{ display:"flex", alignItems:"center",justifyContent:"center" ,flexDirection:"row",
              backgroundColor:"#fa5a2a",padding:14, borderRadius:10, marginTop:23}}>
            
               <Text style={{color:"white",marginLeft:20,textAlign:"center", fontWeight:"600"}}>Submit</Text>
          </TouchableOpacity > 

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: { width: "98%" , borderBottomWidth:1, padding:7},
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
    textAlign: "left",
  },
  icons: {
    padding: 8,
    borderWidth: 2,
    borderColor: "#A6A6A6",
    flexDirection: "row",
    marginLeft: "auto",
    borderRadius: 100,
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
    alignItems: "center",
    marginBottom: 16,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
  },
  flashSaleBanner: {
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    position: "relative",
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 20,
  },
  bannerImage: {
    width: "100%",
    height: "20%",
    borderRadius: 8,
  },
  flashSaleTextContainer: {
    position: "absolute", // This makes the overlay content sit on top of the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center", // Centering the overlay content
    alignItems: "center",
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
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
    width:"100%",
    gap:22
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
    width: "100%",
    height: "100%", // Ensures the image takes up the entire screen
    justifyContent: "center", // Centers the content
    alignItems: "center",
    borderRadius: 20,
  },
});
const productData = [
  {
    id: 0,
    catagory: "phone",
    price: "15,000",
    discription: "iPad Pro 6th Generation",
    performance: "60%",
    image:
      "https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
  },
  {
    id: 1,
    catagory: "phone",
    price: "12,000",
    discription: "Iphone Pro 16th ",
    performance: "80%",
    image:
      "https://images.unsplash.com/photo-1653007717271-49db790effeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    catagory: "laptop",
    price: "15,000",
    discription: "i5 battary 88%",
    performance: "90%",
    image:
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    catagory: "phone",
    price: "15,000",
    discription: "iPad Pro 6th Generation",
    performance: "60%",
    image:
      "https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
  },
];


function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

