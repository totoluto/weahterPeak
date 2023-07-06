import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeActivity from "./Activities/HomeActivity";
import MountainActivity from "./Activities/MountainActivity";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeActivity}
              options={{title: 'Home'}}
          />
          <Stack.Screen name="Mountain" component={MountainActivity} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
