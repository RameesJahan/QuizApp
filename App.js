import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import About from './screens/About';
import Playground from './screens/Playground';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit.ttf'),
    'RedHatDisplay': require('./assets/fonts/RedHatDisplay-BlackItalic.ttf'),
    'Alata': require('./assets/fonts/Alata-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return false;
  }
  
  
  return (
    < >
      <NavigationContainer>
           <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={ Home } 
                options={{ title: 'Quiz App' ,
                           headerShown: false ,
                           contentStyle:{
                             backgroundColor:'#55458E'
                           }
                }}
                />
              <Stack.Screen 
                name="About" 
                component={ About } 
                options={{ title: 'About',
                           headerStyle: {
                              backgroundColor: '#55458E',
                           },
                           headerTintColor: '#fff',
                           headerTitleStyle: {
                              fontFamily:'Alata',
                           },
                           headerBackImageSource: require('./assets/icons8-chevron-left-60.png')
                        }}
                />
              <Stack.Screen 
                name="Playground" 
                component={ Playground } 
                options={{ title: 'Playground' ,
                           headerShown: false ,
                           contentStyle:{
                             backgroundColor:'#55458E'
                           }
                }}
                />
           </Stack.Navigator>
            <StatusBar style="light" 
                       backgroundColor="#55458E" 
                       translucent={false}
                       />
      </NavigationContainer>
    </ >
  );
}

