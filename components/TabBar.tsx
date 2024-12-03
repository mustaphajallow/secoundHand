import HomeIcon from '@/assets/icons/HomeIcon';
import ListIcon from '@/assets/icons/ListIcon';
import LoveIcon from '@/assets/icons/LoveIcon';
import ShopIcon from '@/assets/icons/ShopIcon';
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';


function TabBar({ state, descriptors, navigation }) {

    const primaryColor ="#FD7519";
    const secoundryColor="#373737";
  
  const icons={
    index:(props)=><HomeIcon width={25}  height={25} {...props} />,
    productList :(props) =><ListIcon width={25}  height={25} {...props}/>,
    shop: (props) => <ShopIcon width={25}  height={25} {...props}/>,
    Card: (props) => <LoveIcon width={25}  height={25} {...props}/>,
    
  }
    
  return (
    <View style={styles.tabBar}>
    {state.routes.map((route: { key: string | number; name: any; params: any;  }, index: any, ) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };
    

      return (
        <TouchableOpacity
        key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.tabbarItem}
        >
         {icons[route.name] && icons[route.name]({
    color: isFocused ? primaryColor : secoundryColor
})}
          {/* <Text style={{ color: isFocused ? primaryColor : secoundryColor }}>
            {label}
          </Text> */}
        </TouchableOpacity>
      );
    })}
  </View>    
  )
}
 
const styles = StyleSheet.create({
  tabBar:{
    position:"absolute",
    bottom:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    marginHorizontal:20,
    padding:10,
    borderRadius:20,
   borderCurve:"continuous",
    shadowColor:"black",
    shadowOffset:{width:0,height:10},
    shadowRadius:10,
    shadowOpacity:0.1,

  },
  tabbarItem:{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
  }
});

export default TabBar