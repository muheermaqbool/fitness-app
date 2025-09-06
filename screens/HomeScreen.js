import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/actionrow";

export default function HomeScreen() {
  return (
    <SafeAreaViewContext className="flex-1 relative bg-black">
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView>
    
          <View className=" p-7">
          <TouchableOpacity className="p-5 absolute top-0 right-0 items-center">
            <Ionicons name="person-circle-sharp" size={30} color='#F5EB27' />
            <Text className='text-[#F5EB27]'>PRO</Text>
          </TouchableOpacity>
          <Image
            source={require("../public/images/logo.png")}
            className="w-full h-64"
          />
          <View className="flex-row"><ActionRow title={"track workout"} icon={"fitness"} color={"#303030"} screen='DemoScreen' vertical/>
          <ActionRow title={"brows workout"} icon={"library"} color={"#303030"} screen='DemoScreen' vertical/></View>
           

           <ActionRow title={"connect with friends"} icon={"share-social"} color={"#797979"} screen='DemoScreen'/>
         
           <ActionRow title={"aadd an exercise"} icon={"add-circle"} color={"#797979"}  requiresPro/>
           <ActionRow title={"create a routine"} icon={"time-outline"} color={"#797979"}  requiresPro/>
           <ActionRow title={"join challenges"} icon={"trophy"} color={"#797979"}  requiresPro/>


          </View>
      
    </ScrollView>
    </SafeAreaViewContext>
  );
}
