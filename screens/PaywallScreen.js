import { View, Text, TouchableOpacity ,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const PaywallScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-[#494949]  p-6">
      <TouchableOpacity className="items-end mb-2" onPress={() => navigation.goBack()}>
        <Entypo name="circle-with-cross" size={32} color="white" />
      </TouchableOpacity>

      <View className="flex-1  ">
        <View>
          <View className="items-center w-full">
            <Text className="font-bold text-2xl uppercase text-white">upgrade</Text>
            <Text className="font-light capitalize text-md text-white">
              upgrade to pro to acess all features
            </Text>
          </View>

          <View className="mt-6 justify-center h-[400px]" >
            <View className="flex-row items-center gap-4 bg-white/10 rounded-xl px-4 py-3 mb-3 w-full">
              <Entypo name="star" size={28} color="white" />
              <View className="flex-1">
                <Text className="text-white font-semibold">Unlock all Pro features</Text>
                <Text className="text-white/80 text-sm">Access every workout plan, tracker, and advanced analytics.</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-4 bg-white/10 rounded-xl px-4 py-3 mb-3 w-full">
              <Entypo name="phone" size={28} color="white" />
              <View className="flex-1">
                <Text className="text-white font-semibold">24/7 trainer helpline</Text>
                <Text className="text-white/80 text-sm">Get instant support from certified trainers anytime you need.</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-4 bg-white/10 rounded-xl px-4 py-3 w-full">
              <Entypo name="lock" size={28} color="white" />
              <View className="flex-1">
                <Text className="text-white font-semibold">Unlock limited edition content</Text>
                <Text className="text-white/80 text-sm">Exclusive programs, challenges, and premium routines updated monthly.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className=" mt-auto ">
          <TouchableOpacity
            className="bg-white rounded-xl py-4 items-center mb-3"
            onPress={() => { /* TODO: start trial */ }}
          >
            <Text className="text-black font-bold text-base">Start 1× Free Trial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#22c55e] rounded-xl py-4 items-center mb-4"
            onPress={() => { /* TODO: annual purchase */ }}
          >
            <Text className="text-white font-bold text-base">Save 46% Annually</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="items-center"
            onPress={() => { /* TODO: restore purchase */ }}
          >
            <Text className="text-white/80 text-sm underline">Restore Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaywallScreen;
