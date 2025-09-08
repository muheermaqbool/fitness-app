import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const ActionRow = ({ title, color, screen, vertical, icon, requiresPro }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex-1 m-2 justify-center rounded-lg`}
    >
    
      
        <View className={`${vertical?'flex-col justify-center  px-3 py-2 ':'flex-row '} px-3 py-5 gap-3 items-center  bg-white/10 rounded-lg`}>  
        <Ionicons color={"white"} name={icon} size={30} />
        <Text className="font-bold text-white text-lg capitalize">{title}</Text>
        </View>
      
    </TouchableOpacity>
  );
};

export default ActionRow;
