import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ActionRow = ({ title, color, screen, vertical, icon, requiresPro }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{ backgroundColor: color }}
      className={`flex flex-1 gap-3 py-5 m-2 justify-start px-3 items-center rounded-lg  ${vertical?'flex-col':'flex-row'}`}
    >
      <Ionicons color={"white"} name={icon} size={30} />
      <Text className="font-bold text-white text-lg capitalize">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
