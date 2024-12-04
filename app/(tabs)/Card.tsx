import { ImageBackground, Platform, TextInput } from "react-native";

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
import React from "react";
import SVGComponent from "@/assets/icons/icon";
import Location from "@/assets/icons/location";
import Search from "@/assets/icons/Search";
import Phone from "@/assets/icons/Phone";
import Laptop from "@/assets/icons/Laptop";
import Hedset from "@/assets/icons/Hedset";
import Poduct from "@/components/Product";
import Cloths from "@/assets/icons/Cloths";
import Forniturs from "@/assets/icons/Forniturs";
import LogoIcon from "@/assets/icons/LogoIcon";
import AddIcon from "@/assets/icons/AddIcon";
import PoductTran from "@/components/ProductTrans";


// import Icon from 'react-native-vector-icons/Ionicons';

export default function Card() {
  const [text, onChangeText] = React.useState("Search you products");
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={{marginRight:5,borderRadius:100}}>
           <LogoIcon width={25}  height={25}/> 
          </View>
        
          <Text style={styles.brandName}>Card</Text>
          {/* <View style={styles.icons}>
            <AddIcon color="black" width={25}  height={25} />
            {/* <Icon name="notifications-outline" size={24} style={styles.iconSpacing} />
          </View> */}
        </View>
        {/* search you need */}
        <View style={styles.topBar}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: 10,
              backgroundColor: "rgba(0,0,0,0.1)",
              width:"100%",
              borderRadius:20
            }}
          >
                        <Search color="#FD7519" width={25} height={25}> </Search>

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
        </View>

   
    

        {/* Categories */}
        {/* <View style={styles.categories}>
          {[
            { name: "Phone", icon: <Phone width={25}  height={25}/> },
            { name: "Laptop", icon: <Laptop width={25}  height={25}/> },
            { name: "Headset", icon: <Hedset width={25}  height={25}/> },
            { name: "Cloth", icon: <Cloths width={25}  height={25} /> },
            { name: "Forniturs", icon: <Forniturs width={25}  height={25} /> },
           
          
          ].map((category, index) => (
            <View key={index} style={styles.category}>
             {category.icon}


              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          ))}
        </View> */}

        {/* Flash Sale Banner */}
      

        {/* Flash Sale Items */}
        <View style={styles.flashSaleItems}>
            {productData.map((p, index)=>{
              return(
                <PoductTran key={index} image={p.image} price={p.price} discription={p.discription}/>
              )}
            )} 
       
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
    padding:8,
    borderWidth:2,
    borderColor:"#A6A6A6",
    flexDirection: "row",
    marginLeft:"auto",
  borderRadius:100,

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
});
const productData=[
  {
id:0,
catagory:"phone",
price:"15,000",
discription:"iPad Pro 6th Generation",
performance:"60%",
image:"https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
  },
  {
    id:1,
    catagory:"phone",
    price:"12,000",
    discription:"Iphone Pro 16th ",
    performance:"80%",
    image:"https://images.unsplash.com/photo-1653007717271-49db790effeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
      },
      {
        id:2,
        catagory:"laptop",
        price:"15,000",
        discription:"i5 battary 88%",
        performance:"90%",
        image:"https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id:4,
            catagory:"phone",
            price:"15,000",
            discription:"iPad Pro 6th Generation",
            performance:"60%",
            image:"https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
              },
]

