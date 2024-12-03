// app/home/product/[id].js
import { router, useLocalSearchParams } from "expo-router";
import { ImageBackground, Platform, TextInput } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {
  View,
  Text,Button,
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
import PagerView from "react-native-pager-view";
import LeftIcon from "@/assets/icons/LiftIcon";
import { useRouter } from 'expo-router';
import ListIcon from "@/assets/icons/ListIcon";

export default function ProductDetail() {
  const { id } = useLocalSearchParams(); // Get the product ID from the route
  const [text, onChangeText] = React.useState("Search you products");
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View>
        <View style={styles.topBar}>
          <View style={{ marginRight: 5, borderRadius: 100 , borderWidth:1, borderColor:"rgba(0,0,0, 0.2)", padding:6}}>
          <TouchableOpacity onPress={() => router.back()}  style={{ display:"flex", alignItems:"center",justifyContent:"center"}}>
            <LeftIcon width={25} height={25} color="black" />
            </TouchableOpacity > 
          </View>

          <Text style={styles.brandName}>Product details</Text>
        {/*   <View style={styles.icons}>
            <AddIcon color="black" width={25} height={25} />
            <Icon name="notifications-outline" size={24} style={styles.iconSpacing} /> 
          </View>*/}
        </View>
      </View>

      <ScrollView>
        {/* prduct details */}
        {product.map((data) => {
          return (
            <View key={data.id} style={{ width: "98%",marginHorizontal:"auto" }}>
              <PagerView
                style={{ flex: 1, width: "100%", height: 400 }}
                initialPage={1}
              >
                {data.image.map((values) => {
                  return (
                    <View
                      style={{ alignItems: "center", flex: 1 }}
                      key={values.id}
                    >
                      <Image
                        source={{
                          uri: values.img,
                        }}
                        style={{ width: "100%", height: "100%",borderRadius:10, }}
                      />
                    </View>
                  );
                })}
              </PagerView>
              {/* details info text */}
              <View style={{ flex: 1,     padding: 16,
                               }} key="1">
              <Text
                  style={{ color: "black", fontSize: 16, fontWeight: "400" }}
                >
                  {data.information}
                </Text>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "600", marginTop:20 }}
                >
                  {data.price}
                </Text>
                <Text
                  style={{
                    color: "rgba(0,0,0,0.2)",
                    fontSize: 9,
                    fontWeight: "300",
                  }}
                >
                  {data.Views} 
                </Text>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "600", marginTop:20 }}>
                  Poduct Discription
                </Text>
                <Text style={{ color: "black", fontSize: 14, marginTop:6 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempora. Laborum, earum adipisci natus voluptate ad dignissimos consectetur quam cupiditate.
                </Text>
              </View>
              <View style={{padding:16}}>
              <TouchableOpacity onPress={() => router.back()}  style={{ display:"flex", alignItems:"center",justifyContent:"center" ,flexDirection:"row",
                backgroundColor:"#fa5a2a",padding:14, borderRadius:10}}>
              <ListIcon width={25}  height={25} color={"white"}/>
                 <Text style={{color:"white",marginLeft:20,alignItems:"center", fontWeight:"600"}}> Add to Card</Text>
            </TouchableOpacity > 
              </View>
            </View>
          );
        })}

        {/* Top Bar */}

        {/* search you need */}
        <View style={styles.topBar}>
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: 10,
              backgroundColor: "rgba(0,0,0,0.1)",
              width: "100%",
              borderRadius: 20,
            }}
          >
            <Search></Search>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View> */}
        </View>

        {/* Flash Sale Items */}
        <View style={styles.flashSaleItems}>
          {productData.map((p) => {
            return (
              <Poduct
                image={p.image}
                price={p.price}
                discription={p.discription}
              />
            );
          })}
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
  input: { width: "98%" },
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
    textAlign: "center",
    marginLeft:"auto",
    marginRight:"auto",
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
    id: 0,
    catagory: "phone",
    price: "15,000",
    discription: "iPad Pro 6th Generation",
    performance: "60%",
    image:
      "https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
  },
];

const product = [
  {
    id: 0,
    image: [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    information: "Iphone 15 pro, 6 month of use",
    stole: false,
    Views: "5K",
    price: "D 20,000",
    discount: "10%",
  },
];
