import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SetStateAction, useEffect, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useInitializeExpoRouter } from 'expo-router/build/global-state/router-store';
import React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  //  const [initializing, setInitializing] = useState(true); 
  //   const [user, setUser] = useState(null);


     
       
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
 
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider  value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="inverted" /> 
      <Stack initialRouteName='(root)' screenOptions={{
        headerShown:false
      }}>
      
    
          
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
       
      
   
         
            
          
        <Stack.Screen name="+not-found" />
      </Stack>
     
    </ThemeProvider>
  );

 
}
