import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Headlines from './src/tabs/headlines';
import Sport from './src/tabs/sport';
import Science from './src/tabs/science';
import Tech from './src/tabs/tech';
import Business from './src/tabs/business';

const stack = createStackNavigator();
const topTabs = createMaterialTopTabNavigator();

export default function App() {

  const createMaterialTopTabNavigator = () => {
    return(
      <topTabs.Navigator tabBarOptions={{labelStyle:{fontSize:12, textTransform:'capitalize'}}}>
        <topTabs.Screen name="Headline" component={Headlines} />
        <topTabs.Screen name="Business" component={Business}/>
        <topTabs.Screen name="Sport" component={Sport}/>
        <topTabs.Screen name="Tech" component={Tech}/>
        <topTabs.Screen name="Science" component={Science}/>
      </topTabs.Navigator>
    )
  }
  return (
    <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="topTabs" children={createMaterialTopTabNavigator} 
              options={{headerShown: false}}/>
        </stack.Navigator>
    </NavigationContainer>
  );
}

