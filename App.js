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
              options={{
                  title: 'Home',
                  headerStyle: { backgroundColor: '#242526' },
                  headerTitleStyle: { color: '#E4E6EB' },

              }}
          />
          <Stack.Screen
              name="Mountain"
              component={MountainActivity}
              options={{
                  title: 'MountainDetail',
                  headerStyle: { backgroundColor: '#242526' },
                  headerTitleStyle: { color: '#E4E6EB' },

              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
