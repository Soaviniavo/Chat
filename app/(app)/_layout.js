import { Stack  } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import React from "react";


export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
            name="home"
            options={{
              header : () => {
                return <HomeHeader/>
              }
            }}
      />
    </Stack>
  );
}
