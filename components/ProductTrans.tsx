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
  Button,
} from "react-native";
import React, { useState } from "react";
const PoductTran = ({image,discription,price}: any) =>{
let [count , setCount]=useState(1);

let totalCost = 0;


  function countAdd(){
    if(count < 1){
      setCount(  1)
    }else if(count >= 0){
      setCount( ++count)

    }
        
      
  }
  function countreduce(){
    if(count < 1){
      setCount(  1)
    }else if(count >= 0){
      setCount( count--)

    }
      
  }
    return(

  <View style={{width:"100%"}}>
    <View style={styles.flashSaleItems}>
          <View style={styles.item}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.itemImage}
            />
            <View style={{padding:5, gap:4, width:"auto",flexDirection:"column", }}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                     <Text style={{textAlign:"left"}}>{price}</Text>
                <Text style={styles.discountText}>6% off</Text> 
                </View>
                
              <Text style={styles.itemText}>{discription}</Text> 
            </View>
               <View style={{justifyContent:"center",marginLeft:"auto",flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity  style={{padding:20,backgroundColor:"rgba(0,0,0,.07)",borderRadius:10}} onPress={()=>{countAdd()}}>
                  <Text>+</Text>
                </TouchableOpacity>
                <Text style={{padding:10,backgroundColor:"rgba(0,0,0,.01)",borderRadius:7}}>{count}</Text>
                <TouchableOpacity  style={{padding:20,backgroundColor:"rgba(0,0,0,.07)",borderRadius:10}} onPress={()=>{countreduce()}}>
                  <Text>-</Text>
                </TouchableOpacity>
               </View>
          </View>
       
        </View>
  </View>
);} 

const styles = StyleSheet.create({
 
  
    flashSaleItems: {
     
      justifyContent: "space-between",
      padding: 1,
      width:"100%",
      marginTop:20,
    },
    item: {
        display:"flex",
       flexDirection: "row",
    },
    itemImage: {
      width: "20%",
      height: 57,
      borderRadius: 8,
    },
    discountText: {
      color: "#FF6F61",
      marginLeft: 12,
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

export default PoductTran;