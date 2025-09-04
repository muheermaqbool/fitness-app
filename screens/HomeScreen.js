import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function HomeScreen() {
  return (
    <SafeAreaViewContext className="flex-1 bg-gray-300 relative">
        <ScrollView>
          <View className=" p-7">
          <TouchableOpacity className="p-5 absolute top-0 right-0 items-center">
            <Ionicons name="person-circle-sharp" size={30} color='#22C55E' />
            <Text className='text-green-500'>PRO</Text>
          </TouchableOpacity>
          <Image
            source={require("../public/images/logo.png")}
            className="w-full h-64"
          />

          {/* Action Components */}
          </View>
        </ScrollView>
    </SafeAreaViewContext>
  );
}
