import { Dimensions, ImageBackground, Platform, TextInput } from "react-native";
import { Link, router } from 'expo-router';

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
import React, { useEffect, useRef, useState } from "react";
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
import SchoolIcon from "@/assets/icons/schoolIcon";
import PagerView from "react-native-pager-view";

// import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");


    // This navigation event will trigger the error above.
  const sig =()=>{
    router.push("/(root)/SignIn")
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={{marginRight:5}}>
           <LogoIcon width={25}  height={25} color={"#0891b2"}/> 
          </View>
        
          <Text style={styles.brandName}>Secound Hand</Text>
          <View style={styles.icons}>
            <TouchableOpacity >
             <Link href={"/(root)/SignIn"}>  
              <SVGComponent color={"#FD7519"}  width={25}  height={25}/>
             </Link>
            </TouchableOpacity>
         
            {/* <Icon name="notifications-outline" size={24} style={styles.iconSpacing} /> */}
          </View>
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
            <Search color={"#FD7519"} width={22} height={22}></Search>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Search"
              value={text}
            />
          </View>
        </View>

        {/* Delivery Section */}
        <View style={styles.delivery}>
          <Location  color='#FD7519' width={22}  height={22}/>

          {/* <Text>icon</Text> */}

          <Text style={styles.deliveryText}>
            Deliver to Jl. Rose No. 123 Block A, Cipete Sub-District
          </Text>
        </View>

        {/* Categories */}
        <View  style={{flexDirection:"column", gap:2,flexWrap:"wrap"}}>
    <View style={styles.categories}>
          {[
            { name: "Phone", icon: <Phone width={75}  height={75}/> },
            { name: "Laptop", icon: <Laptop width={75}  height={75}/> },
             { name: "School", icon: <SchoolIcon width={75}  height={75}/> },
            { name: "Cloth", icon: <Cloths width={75}  height={75} /> },
            { name: "Forniturs", icon: <Forniturs width={75}  height={75} /> },
           
          
          ].map((category, index) => (
            <View key={index} style={styles.category}>
             {category.icon}


              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          ))}
        </View>
        
        </View>

        {/* Flash Sale Banner */}
        <AutoSlidingPager />

        {/* Flash Sale Items */}
        <View style={styles.flashSaleItems}>
            {productData.map((p)=>{
              return(
                
                    <Poduct image={p.image} price={p.price} discription={p.discription} id={p.id} key={p.id}/>
            
                
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
    backgroundColor: "#FBF9ED",
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
            id:0,
            catagory:"phone",
            price:"15,000",
            discription:"iPad Pro 6th Generation",
            performance:"60%",
            image:"https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzJTIwcGhvbmVzfGVufDB8fDB8fHww",
              },
]


const AutoSlidingPager = () => {
  const pagerRef = useRef(null); // Reference to the PagerView
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  // Dummy data for the pages
  // const pages = [
  //   { id: 1, title: "Welcome to Page 1" },
  //   { id: 2, title: "Discover Page 2" },
  //   { id: 3, title: "Explore Page 3" },
  // ];

  const pages=[
    {
      id:1,
      image:"https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      persent:"23%",
      notes:"CashBank up to 100%",
      shop:"Shop now"
    },
    {
      id:0,
      image:"https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      persent:"23%",
      notes:"CashBank up to 100%",
      shop:"Shop now"
    },
    {
      id:2,
      image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      persent:"3%",
      notes:"Confort to your  home",
      shop:"House material"
    }
  ]

  // Automatically slide the pages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % pages.length; // Loop back to the first page
        pagerRef.current?.setPage(nextPage); // Move to the next page
        return nextPage;
      });
    }, 3000); // Slide every 3 seconds

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <View>
    <View style={{width:"100%" , height:200}}>

          <PagerView
      style={{ flex: 1, width: "100%", height: 400 }}
      initialPage={0}
      ref={pagerRef} // Attach the ref
      onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} // Update current page on manual swipe
    >
      {pages.map((page, index) => (
        <View key={page.id} style={styles.page}>
          {/* <Text style={styles.text}>{page.title}</Text> */}
           <TouchableOpacity  style={styles.flashSaleBanner}>
       
    
        <ImageBackground 
     source={{ uri: page.image }} 
     style={styles.backgroundImage}
     imageStyle={{ borderRadius: 20 }}
     resizeMode="cover"  // Or "contain", "stretch", etc.
   ></ImageBackground>
       <View style={styles.flashSaleTextContainer}>
         <Text style={styles.flashSaleText}>6.6 Flash Sale</Text>
         <Text style={styles.flashSaleSubText}>Cashback Up to 100%</Text>
         <Text style={styles.shopNowButton}>Shop Now</Text>
       </View>
     </TouchableOpacity>
          
        </View>
      ))}
    </PagerView>
    </View>
   

    </View>


  );
};
