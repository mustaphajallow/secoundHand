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
  ActivityIndicator
} from "react-native";
import React from "react";
import { Link } from 'expo-router';
import { isLoading } from "expo-font";

const Poduct = ({image,discription,price}: any) =>{

    return(

  <Link href={"/(stacks)/productDetails"} style={{width:"49%"}}>
    <View style={styles.flashSaleItems}>
          <View style={styles.item}>
            {
              image.isFetching  ?  <ActivityIndicator size="small" color="#0000ff" />:
          
         
            <Image
              source={{
                uri: image,
              }}
              style={styles.itemImage}
            />  }
            <View style={{padding:5, gap:4}}>
                  <Text style={{textAlign:"left"}}>{price}</Text>
            <Text style={styles.discountText}>6% off</Text>
            <Text style={styles.itemText}>{discription}</Text> 
            </View>
         
          </View>
       
        </View>
  </Link>
);} 

const styles = StyleSheet.create({
 
  
    flashSaleItems: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 1,
      width:"100%",
      marginTop:20,
    },
    item: {
      width: "100%",
    },
    itemImage: {
      width: "100%",
      height: 120,
      borderRadius: 8,
    },
    discountText: {
      color: "#FF6F61",
      marginTop: 2,
    },
    itemText: {
      textAlign: "left",
      fontSize:12
    },
    backgroundImage: {
      width:"100%",
      height:"100%",  // Ensures the image takes up the entire screen
      justifyContent: 'center',  // Centers the content
      alignItems: 'center',
      borderRadius:20
    },
  });

export default Poduct;